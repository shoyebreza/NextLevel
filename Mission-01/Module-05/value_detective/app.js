function describeValue(value) {
    const type = typeof value;
    const truthiness = value ? "truthy" : "falsy";

    return `${type} | ${truthiness}`;
}

const valueInput = document.getElementById("value-input");
const valueOutput = document.getElementById("value-output");

function getInputValue(input) {
    const trimmedInput = input.trim();

    if (trimmedInput === "") {
        return "";
    }

    if (trimmedInput === "true") {
        return true;
    }

    if (trimmedInput === "false") {
        return false;
    }

    if (trimmedInput === "null") {
        return null;
    }

    if (trimmedInput === "undefined") {
        return undefined;
    }

    if (trimmedInput === "NaN") {
        return NaN;
    }

    if (trimmedInput !== "" && !Number.isNaN(Number(trimmedInput))) {
        return Number(trimmedInput);
    }

    return input;
}

valueInput.addEventListener("input", () => {
    valueOutput.textContent = describeValue(getInputValue(valueInput.value));
});