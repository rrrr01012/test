module alu(
    input clk,
    input reset,
    input [7:0]in1,
    input [7:0]in2,
    input in_valid,
    input [1:0]sel,
    output out_valid,
    output reg[7:0]result
);
    always@(posedge clk )begin
        case(sel)
            2'b00:result <= in1 + in2; 
            2'b01:result <= in1 - in2;
            2'b10:result <= in1 * in2;
            2'b11:result <= in1 % in2;
        endcase
        if(out_valid) result = 0;
        if(reset) result = 0;
    end

endmodule
module main();
    reg clk;
    reg reset;
    reg [1:0]sel;
    reg [7:0]in1;
    reg [7:0]in2;
    wire [7:0]result;

    alu aa(
        .clk(clk),
        .reset(reset),
        .in1(in1),
        .in2(in2),
        .result(result),
        .sel(sel)
    );
    initial begin
        clk = 0;
        reset = 0;
        @(posedge clk);
        in1 = 5;
        in2 = 3;
        sel = 3;
        @(posedge clk);
        $display("result =%d",result);
        
        #500 $finish ;
    end
    always #5 clk = ~clk;
endmodule