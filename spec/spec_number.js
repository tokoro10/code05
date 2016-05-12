describe("isEvenNumber", function(){
  context("偶数が与えられた時", function(){
    it("trueを返す", function(){
      expect(isEvenNumber(2)).to.be.ok();
      expect(isEvenNumber(100)).to.be.ok();
      expect(isEvenNumber(-3216)).to.be.ok();
    });
  });

  context("奇数が与えられた時", function(){
    it("falseを返す", function(){
      expect(isEvenNumber(1)).to.not.be.ok();
      expect(isEvenNumber(-123)).to.not.be.ok();
      expect(isEvenNumber(12345)).to.not.be.ok();
    });
  });
});

describe("isAcceptableNumber", function(){
  context("偶数が与えられた時", function(){
    it("falseを返す", function(){
      expect(isAcceptableNumber(2)).to.not.be.ok();
      expect(isAcceptableNumber(100)).to.not.be.ok();
      expect(isAcceptableNumber(-3216)).to.not.be.ok();
    });
  });

  context("3の倍数が与えられた時", function(){
    it("falseを返す", function(){
      expect(isAcceptableNumber(3)).to.not.be.ok();
      expect(isAcceptableNumber(6)).to.not.be.ok();
      expect(isAcceptableNumber(-15)).to.not.be.ok();
    });
  });

  context("それ以外の時", function(){
    it("trueを返す", function(){
      expect(isAcceptableNumber(7)).to.be.ok();
      expect(isAcceptableNumber(11)).to.be.ok();
      expect(isAcceptableNumber(-13)).to.be.ok();
    });
  });
});

describe("isMultipleOf5", function(){
  context("5の倍数が与えられた時", function(){
    it("1を返す", function(){
      expect(isMultipleOf5(5)).to.be(1);
      expect(isMultipleOf5(100)).to.be(1);
      expect(isMultipleOf5(-20)).to.be(1);
    });
  });

  context("それ以外の場合", function(){
    it("0を返す", function(){
      expect(isMultipleOf5(2)).to.be(0);
      expect(isMultipleOf5(13)).to.be(0);
      expect(isMultipleOf5(7)).to.be(0);
    });
  });

});

describe("divideBy2", function(){
  it("2で割った値を返す", function(){
    expect(divideBy2(2)).to.be(1);
    expect(divideBy2(4)).to.be(2);
    expect(divideBy2(5)).to.be(3);
  });
});
