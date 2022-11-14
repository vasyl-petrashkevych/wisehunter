<?php

namespace WiseHunter {
	class Settings {
		public static function init(): void {
			add_action( 'after_setup_theme', [ __CLASS__, 'after_setup_theme_action' ] );
		}

		public static function after_setup_theme_action() {
			self::load_text_domain();
			self::register_nav_menu();
		}

		private static function load_text_domain() {
			load_theme_textdomain( 'wisehunter', get_template_directory() . '/languages' );
		}

		private static function register_nav_menu() {
			register_nav_menus( [
				'primary_menu' => Helpers::__( 'Primary Menu' ),
			] );
		}
	}
}