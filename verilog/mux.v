module mux(f,a,b,sel);
    output f;
    input a,b,sel;
    assign f = sel ? a:b;
endmodule