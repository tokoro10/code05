describe("isMajority", function(){
  context("引数に 20 が与えられた場合", function(){
    it("true を返す", function(){
      expect(isMajority(20)).to.be.ok();
    });
  });

  context("それ以外の場合", function(){
    it("false を返す", function(){
      expect(isMajority(1)).to.not.be.ok();
      expect(isMajority(21)).to.not.be.ok();
      expect(isMajority(40)).to.not.be.ok();
    });
  });
});


describe("inCompulsoryEducation", function(){
  context("引数に 6 未満が与えられた場合", function(){
    it("false を返す", function(){
      expect(isMajority(0)).to.not.be.ok();
      expect(isMajority(1)).to.not.be.ok();
      expect(isMajority(2)).to.not.be.ok();
      expect(isMajority(3)).to.not.be.ok();
      expect(isMajority(4)).to.not.be.ok();
      expect(isMajority(5)).to.not.be.ok();
    });
  });

  context("引数に 16 以上が与えられた場合", function(){
    it("false を返す", function(){
      expect(isMajority(16)).to.not.be.ok();
      expect(isMajority(17)).to.not.be.ok();
      expect(isMajority(18)).to.not.be.ok();
      expect(isMajority(19)).to.not.be.ok();
      expect(isMajority(20)).to.not.be.ok();
    });
  });

  context("それ以外の場合", function(){
    it("true を返す", function(){
      expect(isMajority(6)).to.be.ok();
      expect(isMajority(7)).to.be.ok();
      expect(isMajority(8)).to.be.ok();
      expect(isMajority(9)).to.be.ok();
      expect(isMajority(10)).to.be.ok();
      expect(isMajority(11)).to.be.ok();
      expect(isMajority(12)).to.be.ok();
      expect(isMajority(13)).to.be.ok();
      expect(isMajority(14)).to.be.ok();
      expect(isMajority(15)).to.be.ok();
    });
  });
});
