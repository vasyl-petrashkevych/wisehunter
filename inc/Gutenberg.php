<?php

namespace WiseHunter {
	class Gutenberg {

		public static function init(): void {
			add_filter( 'allowed_block_types_all', [ __CLASS__, 'allowed_block_types' ], 25, 2 );
			add_action( 'init', [ __CLASS__, 'init_action' ] );
//			add_action( 'enqueue_block_editor_assets', [
//				__CLASS__,
//				'enqueue_block_editor_assets_action'
//			] );
			add_filter( 'block_categories_all', [ __CLASS__, 'register_categories' ] );
		}

		public static function register_categories( $categories ) {
			$categories[] = [
				'slug'  => 'grid',
				'title' => 'Grid'
			];

			return $categories;
		}

		public static function enqueue_block_editor_assets_action() {
			self::register_scripts();
		}

		private static function get_blocks(): array {
			$blocks = [
				self::generate_block_name( 'container' ),
				self::generate_block_name( 'twocolumns' ),
			];

			return $blocks;
		}

		public static function init_action(): void {
			self::register_blocks();
			self::register_scripts();
		}

		public static function allowed_block_types(): array {
			$allowed_blocks = [
				'core/paragraph',
				'core/heading',
				'core/list',
				'core/shortcode',
			];

			return array_merge( $allowed_blocks, self::get_blocks() );
		}

		private static function generate_block_name( string $slug ): string {
			return "wisehunter/{$slug}";
		}

		private static function register_scripts() {
			wp_register_script(
				'wisehunter-blocks',
				get_stylesheet_directory_uri() . '/assets/admin/js/gutenberg.js',
				[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
				WISEHUNTER_THEME_VERSION,
				true
			);

			wp_register_style(
				'wisehunter-blocks-style',
				get_stylesheet_directory_uri() . '/assets/admin/styles/gutenberg.css',
				WISEHUNTER_THEME_VERSION
			);
		}

		public static function register_blocks() {
			foreach ( self::get_blocks() as $block ) {
				register_block_type( $block,
					[
						'editor_script' => 'wisehunter-blocks',
						'editor_style'  => 'wisehunter-blocks-style'
					]
				);
			}
		}
	}
}