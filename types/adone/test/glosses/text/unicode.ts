namespace adoneTests.text.unicode {
    const {
        text: {
            unicode
        }
    } = adone;

    let str: string;
    let num: number;
    let bool: boolean;

    str = unicode.symbol.tick;
    str = unicode.symbol.cross;
    str = unicode.symbol.star;
    str = unicode.symbol.square;
    str = unicode.symbol.squareSmall;
    str = unicode.symbol.squareSmallFilled;
    str = unicode.symbol.play;
    str = unicode.symbol.circle;
    str = unicode.symbol.circleFilled;
    str = unicode.symbol.circleDotted;
    str = unicode.symbol.circleDouble;
    str = unicode.symbol.circleCircle;
    str = unicode.symbol.circleCross;
    str = unicode.symbol.circlePipe;
    str = unicode.symbol.circleQuestionMark;
    str = unicode.symbol.bullet;
    str = unicode.symbol.dot;
    str = unicode.symbol.line;
    str = unicode.symbol.ellipsis;
    str = unicode.symbol.pointer;
    str = unicode.symbol.pointerSmall;
    str = unicode.symbol.info;
    str = unicode.symbol.warning;
    str = unicode.symbol.hamburger;
    str = unicode.symbol.smiley;
    str = unicode.symbol.mustache;
    str = unicode.symbol.heart;
    str = unicode.symbol.arrowUp;
    str = unicode.symbol.arrowDown;
    str = unicode.symbol.arrowLeft;
    str = unicode.symbol.arrowRight;
    str = unicode.symbol.radioOn;
    str = unicode.symbol.radioOff;
    str = unicode.symbol.checkboxOn;
    str = unicode.symbol.checkboxOff;
    str = unicode.symbol.checkboxCircleOn;
    str = unicode.symbol.checkboxCircleOff;
    str = unicode.symbol.questionMarkPrefix;
    str = unicode.symbol.oneHalf;
    str = unicode.symbol.oneThird;
    str = unicode.symbol.oneQuarter;
    str = unicode.symbol.oneFifth;
    str = unicode.symbol.oneSixth;
    str = unicode.symbol.oneSeventh;
    str = unicode.symbol.oneEighth;
    str = unicode.symbol.oneNinth;
    str = unicode.symbol.oneTenth;
    str = unicode.symbol.twoThirds;
    str = unicode.symbol.twoFifths;
    str = unicode.symbol.threeQuarters;
    str = unicode.symbol.threeFifths;
    str = unicode.symbol.threeEighths;
    str = unicode.symbol.fourFifths;
    str = unicode.symbol.fiveSixths;
    str = unicode.symbol.fiveEighths;
    str = unicode.symbol.sevenEighths;
    str = unicode.symbol.minus;

    str = unicode.symbolFallback.tick;
    str = unicode.symbolFallback.cross;
    str = unicode.symbolFallback.star;
    str = unicode.symbolFallback.square;
    str = unicode.symbolFallback.squareSmall;
    str = unicode.symbolFallback.squareSmallFilled;
    str = unicode.symbolFallback.play;
    str = unicode.symbolFallback.circle;
    str = unicode.symbolFallback.circleFilled;
    str = unicode.symbolFallback.circleDotted;
    str = unicode.symbolFallback.circleDouble;
    str = unicode.symbolFallback.circleCircle;
    str = unicode.symbolFallback.circleCross;
    str = unicode.symbolFallback.circlePipe;
    str = unicode.symbolFallback.circleQuestionMark;
    str = unicode.symbolFallback.bullet;
    str = unicode.symbolFallback.dot;
    str = unicode.symbolFallback.line;
    str = unicode.symbolFallback.ellipsis;
    str = unicode.symbolFallback.pointer;
    str = unicode.symbolFallback.pointerSmall;
    str = unicode.symbolFallback.info;
    str = unicode.symbolFallback.warning;
    str = unicode.symbolFallback.hamburger;
    str = unicode.symbolFallback.smiley;
    str = unicode.symbolFallback.mustache;
    str = unicode.symbolFallback.heart;
    str = unicode.symbolFallback.arrowUp;
    str = unicode.symbolFallback.arrowDown;
    str = unicode.symbolFallback.arrowLeft;
    str = unicode.symbolFallback.arrowRight;
    str = unicode.symbolFallback.radioOn;
    str = unicode.symbolFallback.radioOff;
    str = unicode.symbolFallback.checkboxOn;
    str = unicode.symbolFallback.checkboxOff;
    str = unicode.symbolFallback.checkboxCircleOn;
    str = unicode.symbolFallback.checkboxCircleOff;
    str = unicode.symbolFallback.questionMarkPrefix;
    str = unicode.symbolFallback.oneHalf;
    str = unicode.symbolFallback.oneThird;
    str = unicode.symbolFallback.oneQuarter;
    str = unicode.symbolFallback.oneFifth;
    str = unicode.symbolFallback.oneSixth;
    str = unicode.symbolFallback.oneSeventh;
    str = unicode.symbolFallback.oneEighth;
    str = unicode.symbolFallback.oneNinth;
    str = unicode.symbolFallback.oneTenth;
    str = unicode.symbolFallback.twoThirds;
    str = unicode.symbolFallback.twoFifths;
    str = unicode.symbolFallback.threeQuarters;
    str = unicode.symbolFallback.threeFifths;
    str = unicode.symbolFallback.threeEighths;
    str = unicode.symbolFallback.fourFifths;
    str = unicode.symbolFallback.fiveSixths;
    str = unicode.symbolFallback.fiveEighths;
    str = unicode.symbolFallback.sevenEighths;
    str = unicode.symbolFallback.minus;

    str = unicode.approx("asd");
    num = unicode.length("ad");
    str = unicode.toArray("asd")[0];
    num = unicode.surrogatePair("a");
    bool = unicode.isFullWidthCodePoint(100);
    bool = unicode.isFullWidth("a");
    str = unicode.toFullWidth("asd");
}
