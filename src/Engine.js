import applicableActions from "./applicableActions";
import {  toArray } from "./utils";


class Engine {
  constructor(rules) {
    this.rules = [];

    if (rules) {
      toArray(rules).forEach(rule => this.addRule(rule));
    }
  }
  addRule = rule => {
    this.rules.push(rule);
  };
  run = formData => Promise.resolve(applicableActions(this.rules, formData));
}

export default Engine;
