pragma circom 2.0.0;

// [assignment] Modify the circuit below to perform a multiplication of three signals

template Multiplier3 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;
   signal input c;
   signal output d;  
   signal med;

   // Constraints.  
   //d <== a * b * c;  
   // modifying to use quadratic constraints
   med <== a*b;
   d <== c*med;
}

component main = Multiplier3();