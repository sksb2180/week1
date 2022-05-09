pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";

template RangeProof(n) {
    assert(n <= 252);
    signal input in; // this is the number to be proved inside the range
    signal input range[2]; // the two elements should be the range, i.e. [lower bound, upper bound]
    signal output out;

    component low = LessEqThan(n);
    component high = GreaterEqThan(n);

    // [assignment] insert your code here
    //using lesseqthan component to check if the input is less than the lower bound
    low.in[0] <== in;
    low.in[1] <== range[1];

    //using greatereqthan component to check if the input is greater than the upper bound
    high.in[0] <== in;
    high.in[1] <== range[0];

    // checking if both satisfies
    out <== low.out * high.out;

}