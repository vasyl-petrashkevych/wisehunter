<?php
require_once 'inc/Helpers.php';
require_once 'inc/Settings.php';
require_once 'inc/Gutenberg.php';
require_once 'inc/RestAPI.php';
require_once 'inc/Security.php';

if ( ! defined( 'WISEHUNTER_THEME_VERSION' ) ) {
	define( 'WISEHUNTER_THEME_VERSION', '1.0.0' );
}

\WiseHunter\Settings::init();
\WiseHunter\Security::init();
\WiseHunter\Gutenberg::init();