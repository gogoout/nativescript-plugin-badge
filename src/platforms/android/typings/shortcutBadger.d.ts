declare module me {
	export module leolin {
		export module shortcutbadger {
			export class Badger {
				public static class: java.lang.Class<me.leolin.shortcutbadger.Badger>;
				/**
				 * Constructs a new instance of the me.leolin.shortcutbadger.Badger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					getSupportLaunchers(): java.util.List<string>;
				});
				public constructor();
				public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
				public getSupportLaunchers(): java.util.List<string>;
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export class BuildConfig {
				public static class: java.lang.Class<me.leolin.shortcutbadger.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export class ShortcutBadgeException {
				public static class: java.lang.Class<me.leolin.shortcutbadger.ShortcutBadgeException>;
				public constructor(param0: string, param1: java.lang.Exception);
				public constructor(param0: string);
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export class ShortcutBadger {
				public static class: java.lang.Class<me.leolin.shortcutbadger.ShortcutBadger>;
				public static applyNotification(param0: globalAndroid.content.Context, param1: globalAndroid.app.Notification, param2: number): void;
				public static removeCount(param0: globalAndroid.content.Context): boolean;
				public static isBadgeCounterSupported(param0: globalAndroid.content.Context): boolean;
				public static applyCount(param0: globalAndroid.content.Context, param1: number): boolean;
				public static removeCountOrThrow(param0: globalAndroid.content.Context): void;
				public static applyCountOrThrow(param0: globalAndroid.content.Context, param1: number): void;
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class AdwHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.AdwHomeBadger>;
					public static INTENT_UPDATE_COUNTER: string;
					public static PACKAGENAME: string;
					public static CLASSNAME: string;
					public static COUNT: string;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class ApexHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.ApexHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class AsusHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.AsusHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class DefaultBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.DefaultBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class EverythingMeHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.EverythingMeHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class HuaweiHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.HuaweiHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class IntentConstants {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.IntentConstants>;
					/**
					 * Constructs a new instance of the me.leolin.shortcutbadger.impl.IntentConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static DEFAULT_OREO_INTENT_ACTION: string;
					public static DEFAULT_INTENT_ACTION: string;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class LGHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.LGHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class NewHtcHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.NewHtcHomeBadger>;
					public static INTENT_UPDATE_SHORTCUT: string;
					public static INTENT_SET_NOTIFICATION: string;
					public static PACKAGENAME: string;
					public static COUNT: string;
					public static EXTRA_COMPONENT: string;
					public static EXTRA_COUNT: string;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class NovaHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.NovaHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class OPPOHomeBader extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.OPPOHomeBader>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class SamsungHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.SamsungHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class SonyHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.SonyHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class VivoHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.VivoHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class XiaomiHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.XiaomiHomeBadger>;
					public static INTENT_ACTION: string;
					public static EXTRA_UPDATE_APP_COMPONENT_NAME: string;
					public static EXTRA_UPDATE_APP_MSG_TEXT: string;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class ZTEHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.ZTEHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module impl {
				export class ZukHomeBadger extends me.leolin.shortcutbadger.Badger {
					public static class: java.lang.Class<me.leolin.shortcutbadger.impl.ZukHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module util {
				export class BroadcastHelper {
					public static class: java.lang.Class<me.leolin.shortcutbadger.util.BroadcastHelper>;
					public static sendDefaultIntentExplicitly(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					public constructor();
					public static resolveBroadcast(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): java.util.List<globalAndroid.content.pm.ResolveInfo>;
					public static sendIntentExplicitly(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module me {
	export module leolin {
		export module shortcutbadger {
			export module util {
				export class CloseHelper {
					public static class: java.lang.Class<me.leolin.shortcutbadger.util.CloseHelper>;
					public static close(param0: globalAndroid.database.Cursor): void;
					public constructor();
					public static closeQuietly(param0: java.io.Closeable): void;
				}
			}
		}
	}
}

//Generics information:

