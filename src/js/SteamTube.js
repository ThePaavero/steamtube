/**
 * SteamTube Chrome extension
 *
 * Add a simple "Search YouTube" link to app page.
 * Searches for "[GAME TITLE] pc gameplay".
 *
 * @author Pekka S. <nospam@astudios.org>
 * @license MIT
 */
var SteamTube = function() {

	// Change this to "Playstation" or "XBOX" or whatever
	var platform = 'pc';

	var button;
	var review_button;
	var game_name = '';

	/**
	 * Initialize
	 * @return void
	 */
	this.init = function()
	{
		findOutGameName();
		createButton();
		createReviewButton();
		styleButton();
		hideButtons();
		doButtonListener();
		showButtons();
	};

	// -----------------------------------------------------------------------

	/**
	 * Figure out what the game's title is
	 * @return void
	 */
	var findOutGameName = function()
	{
		game_name = $('.apphub_AppName').html();
	};

	/**
	 * Create and insert our link
	 * @return void
	 */
	var createButton = function()
	{
		$('body').prepend('<a href="#" id="steamtube_button">Search YouTube</a>');
		button = $('#steamtube_button');
	};

	/**
	 * Add some simple CSS to our link
	 * @return void
	 */
	var styleButton = function()
	{
		button.css({
			'position'   : 'absolute',
			'top'        : 10,
			'left'       : 10,
			'display'    : 'inline-block',
			'background' : '#fff',
			'padding'    : 10,
			'font-size'  : '11px',
			'color'      : '#000',
			'font-family': 'Arial',
			'box-shadow' : '0px 2px 5px 2px #000'
		});
	};

	/**
	 * Attach a jQuery onclick listener to our link
	 * @return void
	 */
	var doButtonListener = function()
	{
		button.on('click', function()
		{
			doOnClick();
			return false;
		});
	};

	/**
	 * Open up a YouTube tab with our search
	 * @return void
	 */
	var doOnClick = function()
	{
		// Search query string
		var q = game_name + ' ' + platform + ' gameplay';

		// URL to open
		var url = 'http://www.youtube.com/results?search_query=' + q;

		window.open(url);
	};

	/**
	 * Hide link
	 * @return void
	 */
	var hideButtons = function()
	{
		button.hide();
		review_button.hide();
	};

	/**
	 * Show link
	 * @return void
	 */
	var showButtons = function()
	{
		button.fadeIn(1000);
		review_button.fadeIn(1000);
	};

	/**
	 * Create review button, style it and attach click listener
	 * @return void
	 */
	var createReviewButton = function()
	{
		$('body').prepend('<a href="#" id="review_button">Search reviews</a>');

		review_button = $('#review_button');
		var q         = game_name + ' ' + platform + ' review';
		var url       = 'https://www.google.fi/search?q=' + q;

		review_button.css({
			'width'      : 102,
			'position'   : 'absolute',
			'top'        : 60,
			'left'       : 10,
			'display'    : 'inline-block',
			'background' : '#fff',
			'line-height': '35px',
			'height'     : 35,
			'text-align' : 'center',
			'font-size'  : '11px',
			'color'      : '#000',
			'font-family': 'Arial',
			'box-shadow' : '0px 2px 5px 2px #000'
		});

		review_button.click(function()
		{
			window.open(url);
			return false;
		});
	};

};

// ---------------------------------------------------------------------------

/**
 * Initialize object
 * @return void
 */
$(function()
{
	var st = new SteamTube();
	st.init();
});

// EOF