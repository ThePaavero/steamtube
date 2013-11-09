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
	var game_name = '';

	/**
	 * Initialize
	 * @return void
	 */
	this.init = function()
	{
		findOutGameName();
		createButton();
		styleButton();
		hideButton();
		doButtonListener();
		showButton();
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
	var hideButton = function()
	{
		button.hide();
	};

	/**
	 * Show link
	 * @return void
	 */
	var showButton = function()
	{
		button.fadeIn(1000);
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