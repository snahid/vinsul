class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="col header-menu-column">
        <div class="header-menu d-none d-xl-block">
            <nav>
                <div class="ltn__main-menu">
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="./about.html">About us</a></li>
                        <li class="menu-icon">
                            <a href="#">Products by Category</a>
                                <ul>
                                    <li><a href="./glass_wool_list.html">Glass Wool</a></li>
                                    <li><a href="#">Rockwool</a>
                                        <ul>
                                            <li><a href="./ceilings_list.html">Ceilings</a></li>
                                            <li><a href="././dry_wall_partition-list.html">Interior Walls</a></li>
                                            <li><a href="./pitch_roof_list.html">Roofs</a></li>
                                            <li><a href="./passive_fire_protection_list.html">Fire Protection</a></li>
                                            <li><a href="#">Rockwool Bonded Slabs</a></li>
                                            <li><a href="#">Rock Wool Pipe Section</a></li>
                                            <li><a href="#">Rockwool Mattresses</a></li>
                                            <li><a href="#">Loose Mineral Wool</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Fastners</a>
                                        <ul>
                                        <li><a href="./self_drilling_screws.html">Self-drilling Screws</a></li>
                                        <li><a href="./self_tapping_screws.html">Self-tapping Screws</a></li>
                                        <li><a href="./concrete_screws.html">Concrete Screws</a></li>
                                        <li><a href="./window_screws.html">Window Screws</a></li>
                                        <li><a href="./wood_screws.html">Wood Screws</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Close Cell Insulation</a>
                                        <ul>
                                        <li><a href="./thermal_insulation_list.html">Thermal Insulation</a>
                                        </li>
                                        <li><a href="./acoustic_insulation_list.html">Acoustic Insulation</a></li>
                                        <li><a href="#"> XPS Thermal</a></li>
                                        <li><a href="#">Crosslinked Polyethylene</a></li>
                                        <li><a href="#">Nitrile Rubber</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="./coatings_and_fire_protection_list.html">Coatings & Fire Protection</a>
                                    </li>
                                </ul>
                        </li>
                        <li class="menu-icon" id="company">
                            <a id="companymenu" href="javascript:void(0);">Products by Company</a>
                            <ul class="companysub1">
                                <li>
                                    <a class="companymenu1" href="javascript:void(0);">Rockwool Products <span class="float-right">+</span></a>
                                    <!-- submenu  -->
                                    <ul class="companysub2">
                                        <li><a class="companymenu1_1" href="javascript:void(0);">Ceilings <span class="float-right">+</span></a>
                                            <ul class="companysub3">
                                                <li><a href="./plasterboard_ceiling.html">Plasterboard Ceiling</a>
                                                   
                                                </li>
                                                <li><a href="./perforated_ceiling.html">Perforated Ceiling</a>
                                                   
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0);">Interior Walls <span class="float-right">+</span></a>
                                            <ul class="companysub4">
                                                <li><a href="./dry_wall_partition-list.html">Dry Wall Partition</a>
                                                   
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Roofs</a>
                                            <span class="float-right">+</span>
                                            <ul>
                                                <li><a href="./pitch_roof_list.html">Pitch Roof</a>
                                                   
                                                   
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Fire Protection</a>
                                            <span class="float-right">+</span>
                                            <ul>
                                                <li><a href="./passive_fire_protection_list.html">Passive Fire Protection</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Rockwool Bonded Slabs</a></li>
                                        <li><a href="#">Rockwool Pipe Section</a></li>
                                        <li><a href="#">Rockwool Mattrasses</a></li>
                                        <li><a href="#">Loose Mineral Wools</a></li>
                                    </ul>
                                    <!-- submenu  -->
                                </li>
                                <li>
                                    <a href="#">Supreme Insulation Products</a>
                                    <span class="float-right">+</span>
                                    <ul>
                                        <li><a href="./thermal_insulation_list.html">Thermal Insulation</a>
                                        </li>
                                        <li><a href="./acoustic_insulation_list.html">Acoustic Insulation</a></li>
                                        <li><a href="#"> XPS Thermal</a></li>
                                        <li><a href="#">Crosslinked Polyethylene</a></li>
                                        <li><a href="#">Nitrile Rubber</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Twiga Insulation Products</a>
                                    <span class="float-right">+</span>
                                    <ul>
                                        <li><a href="./twiga_insul.html">Twiga Insul</a></li>
                                        <li><a href="./twiga_eco_insul.html">Twiga Eco Insul</a></li>
                                        <li><a href="./twiga_insul_preformed_pipe_sections_and_lamella_mat.html">Preformed Pipe Sections and Lamella Mat</a></li>
                                        <li><a href="./flexible_ducts.html">Flexible Duct</a></li>
                                        <li><a href="./twiga_class_o_rated_flexible_duct.html">Twiga Class 'O' Rated Flexible Duct</a></li>
                                        <li><a href="./duct_board.html">Duct Board</a></li>
                                        <li><a href="./acoustic_board.html">Acoustic Board</a></li>
                                        <li><a href="./twiga_glass_tissue_as_a_vapour_barrier_for_thermal_insulation_stystem_protection.html">Glass Tissue for Thermal Insulation System Protection</a></li>
                                        <li><a href="./twiga_glass_surface_tissue.html">Glass Surface Mat for FRP Mouldings</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">E Jot</a>
                                <span class="float-right">+</span>
                                    <ul>
                                        <li><a href="#">Construction</a>
                                        <span class="float-right">+</span>
                                            <ul>
                                                <li><a href="#">Fasteners</a>
                                                <span class="float-right">+</span>
                                                    <ul>
                                                        <li><a href="./self_drilling_screws.html">Self-drilling Screws</a></li>
                                                        <li><a href="./self_tapping_screws.html">Self-tapping Screws</a></li>
                                                        <li><a href="./concrete_screws.html">Concrete Screws</a></li>
                                                        <li><a href="./window_screws.html">Window Screws</a></li>
                                                        <li><a href="./wood_screws.html">Wood Screws</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">Feukem</a>
                                <span class="float-right">+</span>
                                    <ul>
                                        <li><a href="./hvac_list.html">HVAC</a></li>
                                        <li><a href="./chemical_list.html"> Chemical</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="./industries.html">Industries</a>
                            <!-- <ul>
                                <li><a href="#">Hotels</a></li>
                                <li><a href="#">Hospitals</a></li>
                                <li>
                                    <a href="#">Industrial Building</a>
                                </li>
                                <li>
                                    <a href="#">Residential Building</a>
                                </li>
                                <li>
                                    <a href="#">Construction Sites</a>
                                </li>
                                <li>
                                    <a href="#">Process Industries</a>
                                </li>
                            </ul> -->
                        </li>
                        <li><a href="./resource.html">Resources</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
        `;
  }
}

customElements.define(`my-menu`, Header);

class MHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        <div
        id="ltn__utilize-mobile-menu"
        class="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div class="ltn__utilize-menu-inner ltn__scrollbar">
          <div class="ltn__utilize-menu-head">
            <div class="site-logo">
              <a href="index.html"><img src="img/logo.png" alt="Logo" /></a>
            </div>
            <button class="ltn__utilize-close">×</button>
          </div>
          <div class="ltn__utilize-menu">
            <ul>
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./about.html">About</a>
              </li>
              <li>
                <a href="#">Products by Category</a>
                <ul class="sub-menu">
                  <li><a href="./glass_wool_list.html">Glass Wool</a></li>
                  <li>
                    <a href="#">Rockwool</a>
                    <ul>
                      <li><a href="./ceilings_list.html">Ceilings</a></li>
                      <li>
                        <a href="./dry_wall_partition-list.html"
                          >Interior Walls</a
                        >
                      </li>
                      <li><a href="./pitch_roof_list.html">Roofs</a></li>
                      <li>
                        <a href="./passive_fire_protection_list.html"
                          >Fire Protection</a
                        >
                      </li>
                      <li><a href="#">Rockwool Bonded Slabs</a></li>
                      <li><a href="#">Rock Wool Pipe Section</a></li>
                      <li><a href="#">Rockwool Mattresses</a></li>
                      <li><a href="#">Loose Mineral Wool</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Fastners</a>
                    <ul>
                      <li>
                        <a href="./self_drilling_screws.html"
                          >Self-drilling Screws</a
                        >
                      </li>
                      <li>
                        <a href="./self_tapping_screws.html"
                          >Self-tapping Screws</a
                        >
                      </li>
                      <li>
                        <a href="./concrete_screws.html">Concrete Screws</a>
                      </li>
                      <li><a href="./window_screws.html">Window Screws</a></li>
                      <li><a href="./wood_screws.html">Wood Screws</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Close Cell Insulation</a>
                    <ul>
                      <li>
                        <a href="./thermal_insulation_list.html"
                          >Thermal Insulation</a
                        >
                      </li>
                      <li>
                        <a href="./acoustic_insulation_list.html"
                          >Acoustic Insulation</a
                        >
                      </li>
                      <li><a href="#"> XPS Thermal</a></li>
                      <li><a href="#">Crosslinked Polyethylene</a></li>
                      <li><a href="#">Nitrile Rubber</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="./coatings_and_fire_protection_list.html"
                      >Coatings & Fire Protection</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Products by Company</a>
                <ul class="sub-menu">
                  <li>
                    <a href="#">Rockwool Products</a>
                    <!-- submenu  -->
                    <ul>
                      <li>
                        <a href="#">Ceilings</a>
                        <ul>
                          <li>
                            <a href="./plasterboard_ceiling.html"
                              >Plasterboard Ceiling</a
                            >
                          </li>
                          <li>
                            <a href="./perforated_ceiling.html"
                              >Perforated Ceiling</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Interior Walls</a>
                        <ul>
                          <li>
                            <a href="./dry_wall_partition-list.html"
                              >Dry Wall Partition</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Roofs</a>

                        <ul>
                          <li>
                            <a href="./pitch_roof_list.html">Pitch Roof</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Fire Protection</a>

                        <ul>
                          <li>
                            <a href="./passive_fire_protection_list.html"
                              >Passive Fire Protection</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Rockwool Bonded Slabs</a></li>
                      <li><a href="#">Rockwool Pipe Section</a></li>
                      <li><a href="#">Rockwool Mattrasses</a></li>
                      <li><a href="#">Loose Mineral Wools</a></li>
                    </ul>
                    <!-- submenu  -->
                  </li>
                  <li>
                    <a href="#">Supreme Insulation Products</a>

                    <ul>
                      <li>
                        <a href="./thermal_insulation_list.html"
                          >Thermal Insulation</a
                        >
                      </li>
                      <li>
                        <a href="./acoustic_insulation_list.html"
                          >Acoustic Insulation</a
                        >
                      </li>
                      <li><a href="#"> XPS Thermal</a></li>
                      <li><a href="#">Crosslinked Polyethylene</a></li>
                      <li><a href="#">Nitrile Rubber</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Twiga Insulation Products</a>

                    <ul>
                      <li><a href="./twiga_insul.html">Twiga Insul</a></li>
                      <li>
                        <a href="./twiga_eco_insul.html">Twiga Eco Insul</a>
                      </li>
                      <li>
                        <a
                          href="./twiga_insul_preformed_pipe_sections_and_lamella_mat.html"
                          >Preformed Pipe Sections and Lamella Mat</a
                        >
                      </li>
                      <li><a href="./flexible_ducts.html">Flexible Duct</a></li>
                      <li>
                        <a href="./twiga_class_o_rated_flexible_duct.html"
                          >Twiga Class 'O' Rated Flexible Duct</a
                        >
                      </li>
                      <li><a href="./duct_board.html">Duct Board</a></li>
                      <li>
                        <a href="./acoustic_board.html">Acoustic Board</a>
                      </li>
                      <li>
                        <a
                          href="./twiga_glass_tissue_as_a_vapour_barrier_for_thermal_insulation_stystem_protection.html"
                          >Glass Tissue for Thermal Insulation System
                          Protection</a
                        >
                      </li>
                      <li>
                        <a href="./twiga_glass_surface_tissue.html"
                          >Glass Surface Mat for FRP Mouldings</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">E Jot</a>

                    <ul>
                      <li>
                        <a href="#">Construction</a>

                        <ul>
                          <li>
                            <a href="#">Fasteners</a>

                            <ul>
                              <li>
                                <a href="./self_drilling_screws.html"
                                  >Self-drilling Screws</a
                                >
                              </li>
                              <li>
                                <a href="./self_tapping_screws.html"
                                  >Self-tapping Screws</a
                                >
                              </li>
                              <li>
                                <a href="./concrete_screws.html"
                                  >Concrete Screws</a
                                >
                              </li>
                              <li>
                                <a href="./window_screws.html">Window Screws</a>
                              </li>
                              <li>
                                <a href="./wood_screws.html">Wood Screws</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Feukem</a>
                    <ul>
                      <li><a href="./hvac_list.html">HVAC</a></li>
                      <li><a href="./chemical_list.html"> Chemical</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="./industries.html">Industries</a></li>
              <li><a href="./resource.html">Resources</a></li>
              <li><a href="./contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

        `;
  }
}

customElements.define(`my-mmenu`, MHeader);

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        <footer class="ltn__footer-area">
            <div class="footer-top-area section-bg-2 plr--5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-widget footer-about-widget">
                                <div class="footer-logo">
                                    <div class="site-logo">
                                        <img src="img/logo.png" alt="Logo" />
                                    </div>
                                </div>
                                <p>
                                    Vinsul is a leading trader of Glasswool insulation,
                                    fasteners, coatings, and fire protection products. Vinsul is
                                    a partnership firm which deals with world-leading
                                    manufacturers.
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-widget footer-menu-widget clearfix">
                                <h4 class="footer-title">Products by Category</h4>
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Rockwool</a></li>
                                        <li><a href="#">GlassWool</a></li>
                                        <li><a href="#">Fasteners</a></li>
                                        <li>
                                            <a href="#">Coatings & Fire Protection</a>
                                        </li>
                                        <li>
                                            <a href="#">Closed Cell Thermal & Acoustic Insulation</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-widget footer-menu-widget clearfix">
                                <h4 class="footer-title">Products by Company</h4>
                                <div class="footer-menu">
                                    <ul>
                                        <li>
                                            <a href="#">Rockwool Products</a>
                                        </li>
                                        <li>
                                            <a href="#">Supreme Insulation Products</a>
                                        </li>
                                        <li>
                                            <a href="#">Twiga Insulation Products</a>
                                        </li>
                                        <li><a href="#">E Jot </a></li>
                                        <li><a href="#">Feukem</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 col-sm-12 col-12">
                            <div class="footer-widget footer-newsletter-widget">
                                <div class="footer-address">
                                    <ul>
                                        <li>
                                            <div class="footer-address-icon">
                                                <i class="icon-placeholder"></i>
                                            </div>
                                            <div class="footer-address-info">
                                                <p>
                                                    4, Pragati Estate, Behind Hyundai Service Center,
                                                    Sarkhej - Sanand Road, Sarkhej, Ahmedabad - 382 210,
                                                    Gujarat, India.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="footer-address-icon">
                                                <i class="icon-call"></i>
                                            </div>
                                            <div class="footer-address-info">
                                                <p>
                                                    <a href="tel:+91 99877 85941">+91 99877 85941</a>
                                                    <a href="tel:+91 98190 18888"> / +91 98190 18888</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="footer-address-icon">
                                                <i class="icon-mail"></i>
                                            </div>
                                            <div class="footer-address-info">
                                                <p>
                                                    <a href="mailto:bt@vinsul.com">bt@vinsul.com</a>
                                                    <a href="mailto: ahd@vinsul.com"> / ahd@vinsul.com</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ltn__copyright-area ltn__copyright-2 section-bg-7 plr--5">
                <div class="container-fluid ltn__border-top-2">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <div class="ltn__copyright-design clearfix text-center">
                                <p>All Rights Reserved &copy;Vansh Enterprises</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        `;
  }
}

customElements.define(`my-footer`, Footer);
