describe("nor", function(){
  it("否定的論理和の実装", function(){
    expect(nor(true, true)).to.not.be.ok();
    expect(nor(true, false)).to.not.be.ok();
    expect(nor(false, true)).to.not.be.ok();
    expect(nor(false, false)).to.be.ok();
  });
});
