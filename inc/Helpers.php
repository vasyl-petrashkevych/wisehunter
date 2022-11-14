<?php

namespace WiseHunter {

	class Helpers {
		public const TEXT_DOMAIN     = 'wisehunter';
		public const README_LINK     = 'https://github.com/vasyl-petrashkevych/themeoptions/blob/main/README.md';

		public static function __( string $text ): string {
			return __( $text, 'wisehunter' );
		}

		public static function _e( string $text ): void {
			_e( $text, 'wisehunter' );
		}
	}
}