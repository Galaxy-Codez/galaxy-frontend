const Footer = () => {
  return (
    <footer
      className="relative z-10 bg-black pb-8 pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container flex flex-col gap-7">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="et_pb_main_blurb_image">
              <span className="et_pb_image_wrap">
                <span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon et-animated">
                  
                </span>
              </span>
            </div>
            <div className="h-full min-h-10 w-0.5 bg-white" />
            <div className="flex flex-col gap-3">
              <h5 className="text-xs">
                <span>Have a query?</span>
              </h5>
              <div className="hover:text-primaryBlue">
                <a href="tel:+1 (866) 631-8767">
                  <span>+1 (866) 631-8767</span>
                </a>
              </div>
            </div>
          </div>
          <div className="et_pb_with_border et_pb_column_1_3 et_pb_column et_pb_column_5_tb_footer  et_pb_css_mix_blend_mode_passthrough">
            <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0_tb_footer clearfix  et_pb_text_align_center et_pb_bg_layout_light">
              <li className="et_pb_social_media_follow_network_0_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-linkedin">
                <a
                  href="https://www.linkedin.com/company/ropstam/"
                  className="et_pb_with_border icon"
                  title="Follow on LinkedIn"
                  target="_blank"
                >
                  <span
                    className="et_pb_social_media_follow_network_name"
                    aria-hidden="true"
                  >
                    Follow
                  </span>
                </a>
              </li>
              <li className="et_pb_social_media_follow_network_1_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                <a
                  href="https://www.instagram.com/ropstam/"
                  className="et_pb_with_border icon"
                  title="Follow on Instagram"
                  target="_blank"
                >
                  <span
                    className="et_pb_social_media_follow_network_name"
                    aria-hidden="true"
                  >
                    Follow
                  </span>
                </a>
              </li>
              <li className="et_pb_social_media_follow_network_2_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-facebook">
                <a
                  href="https://www.facebook.com/ropstam/"
                  className="et_pb_with_border icon"
                  title="Follow on Facebook"
                  target="_blank"
                >
                  <span
                    className="et_pb_social_media_follow_network_name"
                    aria-hidden="true"
                  >
                    Follow
                  </span>
                </a>
              </li>
              <li className="et_pb_social_media_follow_network_3_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-twitter">
                <a
                  href="https://www.twitter.com/ropstam/"
                  className="et_pb_with_border icon"
                  title="Follow on X"
                  target="_blank"
                >
                  <span
                    className="et_pb_social_media_follow_network_name"
                    aria-hidden="true"
                  >
                    Follow
                  </span>
                </a>
              </li>
            </ul>
            <div className="flex gap-4 flex-wrap text-[#ffffffbd] hover:text-primaryBlue">
              <a href="/terms-of-use">Terms of Use</a> –<span>&nbsp;</span>
              <a href="/privacy-policy">Privacy Policy.</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="et_pb_main_blurb_image">
              <span className="et_pb_image_wrap">
                <span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon et-animated">
                  
                </span>
              </span>
            </div>
            <div className="h-full min-h-10 w-0.5 bg-white" />
            <div className="flex flex-col gap-3">
              <h5 className="text-xs">
                <span>Email us at</span>
              </h5>
              <div className="hover:text-primaryBlue">
                <a href="mailto:afzalimdad9@gmail.com">
                  <span>afzalimdad9@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="text-center text-lg text-[#9a9ea6]">
          © 2024 Ropstam Solutions Inc. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
 