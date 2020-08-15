module alway(f,a,b,sel);
    output f;
    input a,b,sel;
    reg f;
    always @(a or b or sel) begin
        if(sel) f=a;
        else f=b;
    end

endmodule //always