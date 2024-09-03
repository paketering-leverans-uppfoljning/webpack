import { camelCase } from "lodash"
// Asdasdasdasdasdasdasd
const header = document.createElement("h1")
header.textContent = camelCase("Hello world!")

const body = document.getElementById("root")

body.appendChild(header)