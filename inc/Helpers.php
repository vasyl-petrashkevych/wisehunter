<?php

namespace WiseHunter {
	class Helpers {
		public static function __( string $text ): string {
			return __( $text, 'wisehunter' );
		}

		public static function _e( string $text ): void {
			_e( $text, 'wisehunter' );
		}
	}
}