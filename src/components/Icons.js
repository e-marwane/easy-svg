import React, {useState} from "react";

export default function Icons() {
  const array = [
    "activity",
    "airplay",
    "alert-circle",
    "alert-octagon",
    "alert-triangle",
    "align-center",
    "align-justify",
    "align-left",
    "align-right",
    "anchor",
    "aperture",
    "archive",
    "arrow-down-circle",
    "arrow-down-left",
    "arrow-down-right",
    "arrow-down",
    "arrow-left-circle",
    "arrow-left",
    "arrow-right-circle",
    "arrow-right",
    "arrow-up-circle",
    "arrow-up-left",
    "arrow-up-right",
    "arrow-up",
    "at-sign",
    "award",
    "bar-chart-2",
    "bar-chart",
    "battery-charging",
    "battery",
    "bell-off",
    "bell",
    "bluetooth",
    "bold",
    "book-open",
    "book",
    "bookmark",
    "box",
    "briefcase",
    "calendar",
    "camera-off",
    "camera",
    "cast",
    "check-circle",
    "check-square",
    "check",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "chevrons-down",
    "chevrons-left",
    "chevrons-right",
    "chevrons-up",
    "chrome",
    "circle",
    "clipboard",
    "clock",
    "cloud-drizzle",
    "cloud-lightning",
    "cloud-off",
    "cloud-rain",
    "cloud-snow",
    "cloud",
    "code",
    "codepen",
    "codesandbox",
    "coffee",
    "columns",
    "command",
    "compass",
    "copy",
    "corner-down-left",
    "corner-down-right",
    "corner-left-down",
    "corner-left-up",
    "corner-right-down",
    "corner-right-up",
    "corner-up-left",
    "corner-up-right",
    "cpu",
    "credit-card",
    "crop",
    "crosshair",
    "database",
    "delete",
    "disc",
    "divide-circle",
    "divide-square",
    "divide",
    "dollar-sign",
    "download-cloud",
    "download",
    "dribbble",
    "droplet",
    "edit-2",
    "edit-3",
    "edit",
    "external-link",
    "eye-off",
    "eye",
    "facebook",
    "fast-forward",
    "feather",
    "figma",
    "file-minus",
    "file-plus",
    "file-text",
    "file",
    "filenames.txt",
    "film",
    "filter",
    "flag",
    "folder-minus",
    "folder-plus",
    "folder",
    "framer",
    "frown",
    "gift",
    "git-branch",
    "git-commit",
    "git-merge",
    "git-pull-request",
    "github",
    "gitlab",
    "globe",
    "grid",
    "hard-drive",
    "hash",
    "headphones",
    "heart",
    "help-circle",
    "hexagon",
    "home",
    "image",
    "inbox",
    "info",
    "instagram",
    "italic",
    "key",
    "layers",
    "layout",
    "life-buoy",
    "link-2",
    "link",
    "linkedin",
    "list",
    "loader",
    "lock",
    "log-in",
    "log-out",
    "mail",
    "map-pin",
    "map",
    "maximize-2",
    "maximize",
    "meh",
    "menu",
    "message-circle",
    "message-square",
    "mic-off",
    "mic",
    "minimize-2",
    "minimize",
    "minus-circle",
    "minus-square",
    "minus",
    "monitor",
    "moon",
    "more-horizontal",
    "more-vertical",
    "mouse-pointer",
    "move",
    "music",
    "navigation-2",
    "navigation",
    "octagon",
    "package",
    "paperclip",
    "pause-circle",
    "pause",
    "pen-tool",
    "percent",
    "phone-call",
    "phone-forwarded",
    "phone-incoming",
    "phone-missed",
    "phone-off",
    "phone-outgoing",
    "phone",
    "pie-chart",
    "play-circle",
    "play",
    "plus-circle",
    "plus-square",
    "plus",
    "pocket",
    "power",
    "printer",
    "radio",
    "refresh-ccw",
    "refresh-cw",
    "repeat",
    "rewind",
    "rotate-ccw",
    "rotate-cw",
    "rss",
    "save",
    "scissors",
    "search",
    "send",
    "server",
    "settings",
    "share-2",
    "share",
    "shield-off",
    "shield",
    "shopping-bag",
    "shopping-cart",
    "shuffle",
    "sidebar",
    "skip-back",
    "skip-forward",
    "slack",
    "slash",
    "sliders",
    "smartphone",
    "smile",
    "speaker",
    "square",
    "star",
    "stop-circle",
    "sun",
    "sunrise",
    "sunset",
    "table",
    "tablet",
    "tag",
    "target",
    "terminal",
    "thermometer",
    "thumbs-down",
    "thumbs-up",
    "toggle-left",
    "toggle-right",
    "tool",
    "trash-2",
    "trash",
    "trello",
    "trending-down",
    "trending-up",
    "triangle",
    "truck",
    "tv",
    "twitch",
    "twitter",
    "type",
    "umbrella",
    "underline",
    "unlock",
    "upload-cloud",
    "upload",
    "user-check",
    "user-minus",
    "user-plus",
    "user-x",
    "user",
    "users",
    "video-off",
    "video",
    "voicemail",
    "volume-1",
    "volume-2",
    "volume-x",
    "volume",
    "watch",
    "wifi-off",
    "wifi",
    "wind",
    "x-circle",
    "x-octagon",
    "x-square",
    "x",
    "youtube",
    "zap-off",
    "zap",
    "zoom-in",
    "zoom-out",
    "about", "accept_database",
    "address_book", "add_column",
    "add_database", "add_image", "add_row",
    "advance", "advertising", "alarm_clock",
    "alphabetical_sorting_az",
    "alphabetical_sorting_za", "android_os",
    "answers", "approval", "approve",
    "area_chart", "assistant", "audio_file",
    "automatic", "automotive",
    "bad_decision", "bar_chart", "bbc",
    "bearish", "binoculars", "biohazard",
    "biomass", "biotech", "bookmark",
    "briefcase", "broken_link", "bullish",
    "business", "businessman",
    "businesswoman", "business_contact",
    "butting_in", "cable_release",
    "calculator", "calendar", "callback",
    "call_transfer", "camcorder",
    "camcorder_pro", "camera",
    "camera_addon", "camera_identification",
    "cancel", "candle_sticks", "capacitor",
    "cd_logo", "cell_phone",
    "charge_battery", "checkmark",
    "circuit", "clapperboard",
    "clear_filters", "clock",
    "close_up_mode", "cloth",
    "collaboration", "collapse", "collect",
    "combo_chart", "command_line",
    "comments", "compact_camera",
    "conference_call", "contacts",
    "copyleft", "copyright",
    "crystal_oscillator",
    "currency_exchange", "cursor",
    "customer_support", "dam", "database",
    "data_backup", "data_configuration",
    "data_encryption", "data_protection",
    "data_recovery", "data_sheet", "debian",
    "debt", "decision", "delete_column",
    "delete_database", "delete_row",
    "department", "deployment", "diploma_1",
    "diploma_2", "disapprove", "disclaimer",
    "dislike", "display", "document",
    "donate", "doughnut_chart", "down",
    "download", "down_left", "down_right",
    "do_not_inhale", "do_not_insert",
    "do_not_mix", "dribbble", "dvd_logo",
    "edit_image", "electrical_sensor",
    "electrical_threshold", "electricity",
    "electronics", "electro_devices",
    "empty_battery", "empty_filter",
    "empty_trash", "end_call",
    "engineering", "entering_heaven_alive",
    "expand", "expired", "export",
    "external", "factory",
    "factory_breakdown", "faq", "feedback",
    "feed_in", "file", "filenames.txt",
    "filing_cabinet", "filled_filter",
    "film", "film_reel", "fine_print",
    "flash_auto", "flash_off", "flash_on",
    "flow_chart", "folder", "frame",
    "full_battery", "full_trash", "gallery",
    "genealogy", "generic_sorting_asc",
    "generic_sorting_desc", "globe",
    "good_decision", "google",
    "graduation_cap", "grid", "headset",
    "heat_map", "high_battery",
    "high_priority", "home", "icons8_cup",
    "idea", "image_file", "import", "info",
    "inspection", "integrated_webcam",
    "internal", "invite", "in_transit",
    "ipad", "iphone", "key", "kindle",
    "landscape", "leave", "left",
    "left_down", "left_down2", "left_up",
    "left_up2", "library",
    "light_at_the_end_of_tunnel", "like",
    "like_placeholder", "line_chart",
    "link", "linux", "list", "lock",
    "lock_landscape", "lock_portrait",
    "low_battery", "low_priority",
    "make_decision", "manager",
    "medium_priority", "menu",
    "middle_battery", "mind_map", "minus",
    "missed_call", "mms", "money_transfer",
    "multiple_cameras", "multiple_devices",
    "multiple_inputs",
    "multiple_smartphones", "music",
    "negative_dynamic", "neutral_decision",
    "neutral_trading", "news", "next",
    "nfc_sign", "night_landscape",
    "night_portrait", "nook", "no_idea",
    "no_video", "numerical_sorting_12",
    "numerical_sorting_21", "ok",
    "old_time_camera", "online_support",
    "opened_folder", "organization",
    "org_unit", "overtime", "package",
    "paid", "panorama", "parallel_tasks",
    "phone", "phone_android", "photo_reel",
    "picture", "pie_chart", "planner",
    "plus", "podium_without_speaker",
    "podium_with_audience",
    "podium_with_speaker", "portrait_mode",
    "positive_dynamic", "previous", "print",
    "privacy", "process", "puzzle",
    "questions", "radar_plot", "rating",
    "ratings", "reading", "reading_ebook",
    "reddit", "redo", "refresh",
    "registered_trademark", "remove_image",
    "reuse", "right", "right_down",
    "right_down2", "right_up", "right_up2",
    "rotate_camera", "rotate_to_landscape",
    "rotate_to_portrait", "ruler", "rules",
    "safe", "sales_performance",
    "scatter_plot", "search", "selfie",
    "self_service_kiosk", "serial_tasks",
    "services", "service_mark", "settings",
    "share", "shipped", "shop", "signature",
    "sim_card", "sim_card_chip",
    "slr_back_side", "smartphone_tablet",
    "sms", "sound_recording_copyright",
    "speaker", "sports_mode",
    "stack_of_photos", "start",
    "statistics", "steam", "stumbleupon",
    "support", "survey", "switch_camera",
    "synchronize", "tablet_android",
    "template", "timeline", "todo_list",
    "touchscreen_smartphone", "trademark",
    "tree_structure", "two_smartphones",
    "undo", "unlock", "up", "upload",
    "up_left", "up_right", "usb",
    "video_call", "video_file",
    "video_projector", "view_details",
    "vip", "vlc", "voicemail",
    "voice_presentation", "webcam",
    "wi-fi_logo", "wikipedia", "workflow"
  ];
  const [filteredList, setFilteredList] = new useState(array);
  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...array];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
  return (
    <>
      <div className="search-bar-wrapper">
          <div className="search-bar">
            <input type="text" className="input" placeholder="&nbsp;" id="search-box" onChange={filterBySearch} />
            <span className="label">Search for svg</span>
            <span className="highlight"></span>
            <div className="search-btn">
              <span className="icone icon-18">
              <img src={"/img/svg/search.svg"} alt="Toggle theme" />
              </span>
            </div>
          </div>
    </div>
    <div className="icones-wrapper">
          {filteredList.map((data, index) => (
            <div className="icon" key={index}>
              <img loading="lazy" src={`/img/svg/${data}.svg`} alt={data} />
              <a className="absolute-href" href={`/img/svg/${data}.svg`} download target="_blank"></a>
              <p>{data}</p>
            </div>
          ))}
          {filteredList.length === 0 && <h2>No results found</h2>} 
    </div>
    </>
  );
}
