<?php

namespace WiseHunter {
	class Security {
		public static function init(): void {
			add_filter( 'the_generator', [ __CLASS__, 'remove_version' ] );
		}

		public static function remove_version(): string {
			return '';
		}
	}
}