type SimulatedResult = {
  output: string;
  explanation: string;
  isError?: boolean;
};

function parseValue(value: string, variables: Record<string, string>) {
  const trimmedValue = value.trim();

  if (
    (trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) ||
    (trimmedValue.startsWith("'") && trimmedValue.endsWith("'"))
  ) {
    return trimmedValue.slice(1, -1);
  }

  if (/^-?\d+(\.\d+)?$/.test(trimmedValue)) {
    return trimmedValue;
  }

  if (trimmedValue === "True" || trimmedValue === "False") {
    return trimmedValue;
  }

  if (/^\[.*\]$/.test(trimmedValue)) {
    return trimmedValue;
  }

  if (trimmedValue.startsWith("input(")) {
    return "your typed answer";
  }

  return variables[trimmedValue];
}

function evaluateExpression(
  expression: string,
  variables: Record<string, string>,
): SimulatedResult {
  const trimmedExpression = expression.trim();
  const arithmeticMatch = trimmedExpression.match(
    /^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/,
  );

  if (arithmeticMatch) {
    const left = Number(arithmeticMatch[1]);
    const operator = arithmeticMatch[2];
    const right = Number(arithmeticMatch[3]);
    const result =
      operator === "+"
        ? left + right
        : operator === "-"
          ? left - right
          : operator === "*"
            ? left * right
            : left / right;

    return {
      output: String(result),
      explanation: `Python calculated ${left} ${operator} ${right} first, then print() showed the result.`,
    };
  }

  if (
    (trimmedExpression.startsWith('"') && trimmedExpression.endsWith('"')) ||
    (trimmedExpression.startsWith("'") && trimmedExpression.endsWith("'"))
  ) {
    return {
      output: trimmedExpression.slice(1, -1),
      explanation:
        "print() received a string, so the simulated output shows the text inside the quotes.",
    };
  }

  if (/^\[.*\]$/.test(trimmedExpression)) {
    return {
      output: trimmedExpression,
      explanation:
        "print() received a list, so the simulated output shows the list with square brackets.",
    };
  }

  const value = parseValue(trimmedExpression, variables);

  if (value !== undefined) {
    return {
      output: value,
      explanation: `Python looked up ${trimmedExpression} and printed the value stored there.`,
    };
  }

  if (/^[A-Za-z\s]+$/.test(trimmedExpression)) {
    return {
      output: "Syntax hint: text needs quotes inside print()",
      explanation:
        "If you want to print plain text, write it like print(\"Hello\"). Without quotes, Python treats the words as variable names.",
      isError: true,
    };
  }

  return {
    output: `NameError: name '${trimmedExpression}' is not defined`,
    explanation:
      "Python tried to print a variable name it does not know yet. Create the variable first, or wrap text in quotes.",
    isError: true,
  };
}

export function simulatePython(code: string): SimulatedResult {
  const variables: Record<string, string> = {};
  const lines = code
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const output: string[] = [];
  const explanations: string[] = [];

  if (lines.length === 0) {
    return {
      output: "Nothing to run yet.",
      explanation: "Try choosing an example or typing a print() statement.",
    };
  }

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (/^[a-zA-Z_]\w*\s*==/.test(line)) {
      return {
        output: "Syntax hint: use = to store a value, not ==",
        explanation:
          "== compares two values. To assign a value to a variable, use one equals sign.",
        isError: true,
      };
    }

    const assignmentMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);

    if (assignmentMatch) {
      const [, name, value] = assignmentMatch;
      variables[name] = parseValue(value, variables) ?? value.trim();
      explanations.push(`${name} now stores ${variables[name]}.`);
      continue;
    }

    const printMatch = line.match(/^print\((.*)\)$/);

    if (printMatch) {
      const result = evaluateExpression(printMatch[1], variables);
      output.push(result.output);
      explanations.push(result.explanation);
      continue;
    }

    const conditionMatch = line.match(/^if\s+([a-zA-Z_]\w*)\s*>=\s*(\d+):$/);

    if (conditionMatch) {
      const [, variableName, target] = conditionMatch;
      const variableValue = Number(variables[variableName]);
      const nextLine = lines[index + 1];

      if (variableValue >= Number(target) && nextLine?.startsWith("print(")) {
        const result = evaluateExpression(
          nextLine.replace(/^print\((.*)\)$/, "$1"),
          variables,
        );
        output.push(result.output);
        explanations.push(
          `The condition was True, so Python ran the indented print() line.`,
        );
        index += 1;
      }
      continue;
    }

    const loopMatch = line.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+([a-zA-Z_]\w*):$/);

    if (loopMatch) {
      const [, itemName, listName] = loopMatch;
      const listValue = variables[listName];
      const nextLine = lines[index + 1];
      const items = listValue?.match(/"([^"]+)"/g)?.map((item) => item.slice(1, -1));

      if (items && nextLine === `print(${itemName})`) {
        output.push(...items);
        explanations.push(
          `The loop printed each item from ${listName}, one at a time.`,
        );
        index += 1;
      }
      continue;
    }
  }

  if (output.length === 0) {
    return {
      output: "No printed output.",
      explanation:
        "The simulator found assignments, but no print() call. Use print() to show a value.",
    };
  }

  return {
    output: output.join("\n"),
    explanation: explanations.at(-1) ?? "The simulator ran the print() calls.",
  };
}
