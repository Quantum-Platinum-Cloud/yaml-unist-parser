import { getFirstContent, testCases } from "../helpers";
import { BlockFolded } from "../types";

testCases([
  [">\n  123\n  456\n\n\n", getFirstContent()],
  [">+\n  123\n  456\n\n\n", getFirstContent()],
  [">-\n  123\n  456\n\n\n", getFirstContent()],
  [">1\n  123\n  456\n\n\n", getFirstContent()],
  [">1+\n  123\n  456\n\n\n", getFirstContent()],
  [">1-\n  123\n  456\n\n\n", getFirstContent()],
  [
    "  !!str &anchor \n  # comment  \n>\n  123\n  456\n\n\n",
    [
      getFirstContent(),
      root => getFirstContent<BlockFolded>(root).middleComments[0],
    ],
  ],
]);
