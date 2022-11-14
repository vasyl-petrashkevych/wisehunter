<?php
namespace WiseHunter {
	class ThemeSettings {
		private const OPTIONS_PAGE_URL = 'options-general.php?page=theme_options';

		public static function init() {
			add_action( 'admin_menu', [ __CLASS__, 'admin_menu' ] );
			add_action( 'admin_init', [ __CLASS__, 'admin_init' ] );
			add_action( 'admin_enqueue_scripts', [ __CLASS__, 'register_scripts' ] );

			add_filter( 'plugin_action_links_themeoptions/index.php', [
				__CLASS__,
				'add_action_links'
			] );
		}

		public static function admin_init() {
			load_plugin_textdomain( Helpers::TEXT_DOMAIN );
		}

		public static function admin_menu() {
			add_options_page(
				Helpers::__( 'Theme Options' ),
				Helpers::__( 'Theme Options' ),
				'manage_options',
				'theme_options',
				[ __CLASS__, 'options_page_content' ],
			);
		}

		public static function add_action_links( $actions ): array {
			$links = [
				'<a href="' . admin_url( self::OPTIONS_PAGE_URL ) . '">' . Helpers::__( 'Settings' ) . '</a>',
				'<a href="' . Helpers::README_LINK . '" target="_blank">' . Helpers::__( 'Documentation' ) . '</a>',
			];

			return array_merge( $links, $actions );
		}

		public static function admin_bar_menu( \WP_Admin_Bar $admin_bar ) {
			$admin_bar->add_menu( [
				'id'     => 'menu-id',
				'parent' => null,
				'group'  => null,
				'title'  => Helpers::__( 'Theme Options' ),
				'href'   => admin_url( self::OPTIONS_PAGE_URL ),
				'meta'   => [
					'title' => Helpers::__( 'Theme Options' ), //This title will show on hover
				]
			] );
		}

		public static function register_scripts() {
			if ( THEME_OPTIONS_ENV === 'development' ) {
				wp_register_style( Helpers::TEXT_DOMAIN, THEME_URI . '/assets/admin/styles/settings.css', [], WISEHUNTER_THEME_VERSION );
				wp_register_style( Helpers::TEXT_DOMAIN . '_vendor', THEME_URI . '/assets/admin/styles/vendor.css', [], WISEHUNTER_THEME_VERSION );
				wp_register_script( Helpers::TEXT_DOMAIN, THEME_URI . '/assets/admin/js/settings.js', [], WISEHUNTER_THEME_VERSION, true );
				wp_register_script( Helpers::TEXT_DOMAIN . '_vendor', THEME_URI . '/assets/admin/js/vendor.js', [], WISEHUNTER_THEME_VERSION, true );
			} else {
				wp_register_style( Helpers::TEXT_DOMAIN, THEME_URI . 'assets/admin/css/main.min.css', [], WISEHUNTER_THEME_VERSION );
				wp_register_style( Helpers::TEXT_DOMAIN . '_vendor', THEME_URI . 'assets/admin/css/vendor.min.css', [], WISEHUNTER_THEME_VERSION );
				wp_register_script( Helpers::TEXT_DOMAIN, THEME_URI . 'assets/admin/js/main.min.js', [], WISEHUNTER_THEME_VERSION, true );
				wp_register_script( Helpers::TEXT_DOMAIN . '_vendor', THEME_URI . 'assets/admin/js/vendor.min.js', [], WISEHUNTER_THEME_VERSION, true );
			}
			wp_enqueue_media();
			wp_localize_script(
				Helpers::TEXT_DOMAIN,
				Helpers::TEXT_DOMAIN . 'Theme',
				[
					'version' => WISEHUNTER_THEME_VERSION,
					'title'   => Helpers::__( 'Theme Options' ),
					'url'     => THEME_URI,
				]
			);
			wp_localize_script(
				Helpers::TEXT_DOMAIN,
				Helpers::TEXT_DOMAIN . 'ApiNonce',
				[
					'root'  => esc_url_raw( rest_url() ),
					'nonce' => wp_create_nonce( 'wp_rest' ),
				]
			);
		}

		public static function options_page_content() { ?>
			<div class="wrap">
				<div id="root"></div>
			</div>
			<?php
			wp_enqueue_script( Helpers::TEXT_DOMAIN );
			wp_enqueue_script( Helpers::TEXT_DOMAIN . '_vendor' );
			wp_enqueue_style( Helpers::TEXT_DOMAIN );
			wp_enqueue_style( Helpers::TEXT_DOMAIN . '_vendor' );
		}
	}
}