module main;
reg[7:0] A,B;
initial begin 
    #5 A=1;
    #5 A=A+1;
    B=A+1;
    $display("A=%d B=%d",A,B);
end
endmodule