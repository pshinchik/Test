/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'jquery/sticky'
], function ($) {
    'use strict';

    $(".nav-sections").sticky({topSpacing:0});
    $(".product-header-block").sticky({topSpacing:53});

    $('.product-info-price-main .tocart').on('click', function(){
        $('.box-tocart .tocart')[0].click();
    });
});