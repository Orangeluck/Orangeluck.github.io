
(function(){var HomePage=function(){this.init()}
HomePage.prototype.init=function(){this.updateTileHeight()
this.initHeader()
this.initVideoLink()
$(window).on('resize',this.updateTileHeight)
if(!Modernizr.touch){$('div.tiles ul li').hover(function(){$(this).addClass('flipped')},function(){$(this).removeClass('flipped')})}else{$('div.tiles ul li').click(function(){if(!$(this).hasClass('flipped')){$('div.tiles ul li').removeClass('flipped')
$(this).addClass('flipped')}else
$(this).removeClass('flipped')})}}
HomePage.prototype.updateTileHeight=function(){var width=$('div.tiles ul li').first().width();$('div.tiles ul li').each(function(){var $tile=$('div.flip-container',this);$tile.height(width);})}
HomePage.prototype.initHeader=function(){setTimeout(function(){$('.header-container').addClass('loaded')},500)}
HomePage.prototype.initVideoLink=function(){var mobile=(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))
if(mobile){var $link=$('[data-provider="modal-video"]')
$link.attr('href','http://player.vimeo.com/video/79963873?autoplay=1')
$link.removeAttr('data-provider')
$link.removeAttr('target')}
$(document).on('click','[data-provider="modal-video"]',this.showVideoModal)}
HomePage.prototype.showVideoModal=function(e){e.preventDefault();var $target=$(e.currentTarget),videoSrc=$target.data('video-embed'),$modal=$($target.data('target'))
$modal.find('iframe').attr('src',videoSrc).end().on('hide.bs.modal',function(){$(this).off('hide.bs.modal').find('iframe').attr('src','');}).modal('show')}
new HomePage();})();