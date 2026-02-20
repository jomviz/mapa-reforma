var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#d6d6d6",
    state_hover_color: "#e3c9bf",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    ARA: {
      name: "Salta",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/"
    },
    ARB: {
      name: "Buenos Aires",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/"
    },
    ARC: {
      name: "Ciudad de Buenos Aires",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/"
    },
    ARD: {
      name: "San Luis",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/"
    },
    ARE: {
      name: "Entre Ríos",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/"
    },
    ARF: {
      name: "La Rioja",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/"
    },
    ARG: {
      name: "Santiago del Estero",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/"
    },
    ARH: {
      name: "Chaco",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/"
    },
    ARJ: {
      name: "San Juan",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/"
    },
    ARK: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Catamarca",
      description: " "
    },
    ARL: {
      name: "La Pampa",
      description: " ",
      url: "https://libertadmatriculaar.blogspot.com/2026/02/la-pampa.html"
    },
    ARM: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Mendoza",
      description: " "
    },
    ARN: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Misiones",
      description: " "
    },
    ARP: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Formosa",
      description: " "
    },
    ARQ: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Neuquén",
      description: " "
    },
    ARR: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Río Negro",
      description: " "
    },
    ARS: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Santa Fe",
      description: " "
    },
    ART: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Tucumán",
      description: " "
    },
    ARU: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Chubut",
      description: " "
    },
    ARV: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Tierra del Fuego",
      description: " "
    },
    ARW: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Corrientes",
      description: " "
    },
    ARX: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Córdoba",
      description: " "
    },
    ARY: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Jujuy",
      description: " "
    },
    ARZ: {
      url: "https://libertadmatriculaar.blogspot.com/",
      name: "Santa Cruz",
      description: " "
    }
  },
  locations: {
    "0": {
      name: "Buenos Aires",
      lat: "-34.606389",
      lng: "-58.435278"
    }
  },
  labels: {
    ARA: {
      name: "Salta",
      parent_id: "SAL"
    },
    ARB: {
      name: "Buenos Aires",
      parent_id: "BUE"
    },
    ARC: {
      name: "Ciudad de Buenos Aires",
      parent_id: "CAB"
    },
    ARD: {
      name: "San Luis",
      parent_id: "SLU"
    },
    ARE: {
      name: "Entre Ríos",
      parent_id: "ERI"
    },
    ARF: {
      name: "La Rioja",
      parent_id: "LRJ"
    },
    ARG: {
      name: "Santiago del Estero",
      parent_id: "SGO"
    },
    ARH: {
      name: "Chaco",
      parent_id: "CHA"
    },
    ARJ: {
      name: "San Juan",
      parent_id: "SJU"
    },
    ARK: {
      name: "Catamarca",
      parent_id: "CAT"
    },
    ARL: {
      name: "La Pampa",
      parent_id: "LPA"
    },
    ARM: {
      name: "Mendoza",
      parent_id: "MEN"
    },
    ARN: {
      name: "Misiones",
      parent_id: "MIS"
    },
    ARP: {
      name: "Formosa",
      parent_id: "FOR"
    },
    ARQ: {
      name: "Neuquén",
      parent_id: "NEU"
    },
    ARR: {
      name: "Río Negro",
      parent_id: "RIO"
    },
    ARS: {
      name: "Santa Fe",
      parent_id: "SFE"
    },
    ART: {
      name: "Tucumán",
      parent_id: "TUC"
    },
    ARU: {
      name: "Chubut",
      parent_id: "CHU"
    },
    ARV: {
      name: "Tierra del Fuego",
      parent_id: "TDF"
    },
    ARW: {
      name: "Corrientes",
      parent_id: "COR"
    },
    ARX: {
      name: "Córdoba",
      parent_id: "CBA"
    },
    ARY: {
      name: "Jujuy",
      parent_id: "JUJ"
    },
    ARZ: {
      name: "Santa Cruz",
      parent_id: "SCR"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};
