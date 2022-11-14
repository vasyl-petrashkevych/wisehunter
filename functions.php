<?php
require_once 'inc/Helpers.php';
require_once 'inc/Settings.php';
require_once 'inc/Gutenberg.php';
require_once 'inc/RestAPI.php';
require_once 'inc/Security.php';
require_once 'inc/ThemeSettings.php';

define('THEME_DIR', get_stylesheet_directory());
define('THEME_URI', get_stylesheet_directory_uri());
define('THEME_OPTIONS_ENV', $_SERVER['SERVER_NAME'] === 'localhost' ? 'development' : 'production');

if ( ! defined( 'WISEHUNTER_THEME_VERSION' ) ) {
	define( 'WISEHUNTER_THEME_VERSION', '1.0.0' );
}

\WiseHunter\Settings::init();
\WiseHunter\Security::init();
\WiseHunter\Gutenberg::init();
\WiseHunter\ThemeSettings::init();
