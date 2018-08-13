import { expect } from "chai";
import soma from "./soma";

it("Deveria ser uma função", () => {
	expect(soma).to.be.a("function");
});

it("Deveria retornar 3", () => {
	expect(soma(1, 2)).to.be.equal(3);
});
