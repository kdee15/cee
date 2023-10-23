export function setCarouselConfig(config, type) {
    const {
        slickDots,
        slickInfinite,
        slickClassName,
        slickCenterPadding,
        slickCenterMode,
        slickSpeed,
        slickMargin,
        slickSlidesToShow,
        slickArrows,
        slickDotsLG,
        slickInfiniteLG,
        slickClassNameLG,
        slickCenterPaddingLG,
        slickCenterModeLG,
        slickSpeedLG,
        slickMarginLG,
        slickSlidesToShowLG,
        slickArrowsLG,
        slickDotsMD,
        slickInfiniteMD,
        slickClassNameMD,
        slickCenterPaddingMD,
        slickCenterModeMD,
        slickSpeedMD,
        slickMarginMD,
        slickSlidesToShowMD,
        slickArrowsMD,
        slickDotsSM,
        slickInfiniteSM,
        slickClassNameSM,
        slickCenterPaddingSM,
        slickCenterModeSM,
        slickSpeedSM,
        slickMarginSM,
        slickSlidesToShowSM,
        slickArrowsSM
    } = config;

    const responsiveConfig = [
        {
            breakpoint: 1200,
            settings: {
                dots: slickDotsLG,
                infinite: slickInfiniteLG,
                className: slickClassNameLG,
                centerMode: slickCenterModeLG,
                speed: slickSpeedLG,
                centerPadding: slickCenterPaddingLG,
                margin: slickMarginLG,
                slidesToShow: slickSlidesToShowLG,
                arrows: slickArrowsLG
            }
        },
        {
            breakpoint: 991,
            settings: {
                dots: slickDotsMD,
                infinite: slickInfiniteMD,
                className: slickClassNameMD,
                centerMode: slickCenterModeMD,
                speed: slickSpeedMD,
                centerPadding: slickCenterPaddingMD,
                margin: slickMarginMD,
                slidesToShow: slickSlidesToShowMD,
                arrows: slickArrowsMD
            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: slickDotsSM,
                infinite: slickInfiniteSM,
                className: slickClassNameSM,
                centerMode: slickCenterModeSM,
                speed: slickSpeedSM,
                centerPadding: slickCenterPaddingSM,
                margin: slickMarginSM,
                slidesToShow: slickSlidesToShowSM,
                arrows: slickArrowsSM
            }
        }
    ];

    return {
        dots: slickDots,
        infinite: slickInfinite,
        className: slickClassName,
        centerMode: slickCenterMode,
        speed: slickSpeed,
        centerPadding: slickCenterPadding,
        margin: slickMargin,
        slidesToShow: slickSlidesToShow,
        arrows: slickArrows,
        responsive: setResponsiveConfig(responsiveConfig, type)
    };
}

function setResponsiveConfig(config, type) {
    return config.filter((block) => !(block.breakpoint === 1200 && type === 'music'));
}
