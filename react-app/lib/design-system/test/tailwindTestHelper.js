import positionTokensRegex from "../../../test/positionTokens.json";

/**
 *
 * Based on a couple position tokens regex, check whether the given cssClass param has some of
 * the position class
 *
 * @param {string} cssClass to check whether has tailwind position tokes
 */
export const hasPositionTokens = (cssClass) =>
  positionTokensRegex
    .map((ptr) => new RegExp(ptr).test(cssClass))
    .reduce((a, b) => a || b);
