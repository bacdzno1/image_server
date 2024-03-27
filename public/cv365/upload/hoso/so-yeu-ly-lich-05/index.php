<link rel="stylesheet" href="upload/hoso/<?php echo $item->alias; ?>/css/hoso_<?php echo $lang; ?>.css" type="text/css">
<link id="cv-color-css" rel="stylesheet" href="upload/hoso/<?php echo $item->alias; ?>/css/colors/<?php echo $color_active; ?>.css" type="text/css">
<link id="cv-font" rel="stylesheet" href="upload/hoso/<?php echo $item->alias; ?>/css/fonts/<?php echo $font_active; ?>.css" type="text/css">

<?
	function clean($str)
	{
		$str = trim(html_entity_decode($str));
            $string = htmlentities($str, null, 'utf-8');
		$content = str_replace("&nbsp;", "", $string);
		$content = html_entity_decode($content);
		return $content;
	}
?>
<div id="page-letter">
	<div id="letter-title" class="non-printable" contenteditable="true" cvo-placeholder="Tiêu đề"><?php echo $lt_title; ?></div>
	<div id="form-letter">			
		<div id="page1">
                  <div class="page_ctr">
            		<p class="p1-head">
            			<?php echo $lang_chxh; ?>
            		</p>
            		<div id="cvo-profile-avatar-wraper">
                            <img id="cvo-profile-avatar" cvo-form-field="true" src="<?php echo $avatar; ?>">
                        </div>
                        <p class="h1"><?php echo $lang_syll; ?></p>

                        <div class="p1-d1">
                        	<div class="tx_nm hvt"><?php echo $lang_name; ?></div>
                              <div id="hoten" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($name); ?></div>
                        	<div class="tx_nm gioitinh"><?php echo $lang_sex; ?></div>
                              <div id="gioitinh" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->gioitinh); ?></div>
                        </div>

                        <div class="p1-d1">
                        	<div class="tx_nm ns_ngay"><?php echo $lang_bir_day; ?></div>
                              <div id="ns_ngay" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ns_ngay); ?></div>
                        	<div class="tx_nm ns_thang"><?php echo $lang_bir_month ; ?></div>
                              <div id="ns_thang" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ns_thang); ?></div>
                        	<div class="tx_nm ns_nam"><?php echo $lang_bir_year ; ?></div>
                              <div id="ns_nam" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ns_nam); ?></div>
                        </div>


                        <div class="p1-d1">
                        	<div class="tx_nm dk_tt"><?php echo $lang_tt_now; ?></div>
                              <div id="dk_tt" class="d2 line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->dk_tt); ?></div>
                        </div>
                        <div class="p1-d1">
                        	<div class="tx_nm cmtnd"><?php echo $lang_cmnd; ?></div>
                              <div id="cmtnd" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->cmtnd); ?></div>
                        	<div class="tx_nm noicap"><?php echo $lang_w_cmnd; ?></div>
                              <div id="noicap" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->noicap); ?></div>
                        </div>
                        <div class="p1-d1">
                        	<div class="tx_nm cm_ngay"><?php echo $lang_d_cmnd; ?></div>
                              <div id="cm_ngay" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->cm_ngay); ?></div>
                        	<div class="tx_nm cm_thang"><?php echo $lang_m_cmnd; ?></div>
                              <div id="cm_thang" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->cm_thang); ?></div>
                        	<div class="tx_nm cm_nam"><?php echo $lang_y_cmnd; ?></div>
                              <div id="cm_nam" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->cm_nam); ?></div>
                        </div>
                        <div class="p1-d1">
                        	<div class="tx_nm dt_home"><?php echo $lang_dt_home; ?></div>
                              <div id="dt_home" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->dt_home); ?></div>
                        	<div class="tx_nm mobile"><?php echo $lang_dt_tele; ?></div>
                              <div id="mobile" class="line" cvo-placeholder="" contenteditable="true"><?php echo $phone; ?></div>
                        </div>
                        <div class="p1-d1">
                        	<div class="tx_nm baotin"><?php echo $lang_tb; ?></div>
                              <div id="baotin" class="line d3" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->baotin); ?></div>
                        </div>
                        <div class="p1-d2">
                        	<div class="ct_center">
                                    <div class="tx_nm sohieu"><?php echo $lang_sh; ?></div>
                                    <div id="sohieu" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->sohieu); ?></div>
                            </div>

                        	<div class="ct_center">
                                    <div class="tx_nm kyhieu"><?php echo $lang_kh; ?></div>
                                    <div id="kyhieu" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->kyhieu); ?></div>
                            </div>
                        </div>
                  </div>
		</div>
		<div id="page2">
                 <div class="page_ctr">
                        <div class="p1-d1">
                              <div class="tx_nm hoten_p2"><?php echo $lang_name; ?></div>
                              <div id="hoten_p2" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->hoten_p2); ?></div>
                              <div class="tx_nm bidanh"><?php echo $lang_nick_name; ?></div>
                              <div id="bidanh" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->bidanh); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm tenthuonggoi"><?php echo $lang_nom_name; ?></div>
                              <div id="tenthuonggoi" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tenthuonggoi); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm ns_ngay_p2"><?php echo $lang_bir_day; ?></div>
                              <div id="ns_ngay_p2" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ns_ngay_p2); ?></div>
                              <div class="tx_nm ns_thang_p2"><?php echo $lang_bir_month; ?></div>
                              <div id="ns_thang_p2" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ns_thang_p2); ?></div>
                              <div class="tx_nm ns_nam_p2"><?php echo $lang_bir_year; ?></div>
                              <div id="ns_nam_p2" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ns_nam_p2); ?></div>
                              <div class="tx_nm tai_p2"><?php echo $lang_bir_w; ?></div>
                              <div id="tai_p2" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tai_p2); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm hoten"><?php echo $lang_qq; ?></div>
                              <div id="nguyenquan" class="line d1" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nguyenquan); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm hoten"><?php echo $lang_tt_now1; ?></div>
                              <div id="dk_tt_p2" class="line d1" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->dk_tt_p2); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm dantoc"><?php echo $lang_dt; ?></div>
                              <div id="dantoc" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->dantoc); ?></div>
                              <div class="tx_nm tongiao"><?php echo $lang_tg; ?></div>
                              <div id="tongiao" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tongiao); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm thanhphan_gd"><?php echo $lang_tpgd_scc; ?></div>
                              <div id="thanhphan_gd" class="line d1" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->thanhphan_gd); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm thanhphan_bt"><?php echo $lang_tpbt; ?></div>
                              <div id="thanhphan_bt" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->thanhphan_bt); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm vanhoa"><?php echo $lang_tdvh; ?></div>
                              <div id="vanhoa" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->vanhoa); ?></div>
                               <div class="tx_nm ngoaingu"><?php echo $lang_language; ?></div>
                               <div id="ngoaingu" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ngoaingu); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm chuyenmon"><?php echo $lang_tdcm; ?></div>
                              <div id="chuyenmon" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->chuyenmon); ?></div>
                              <div class="tx_nm loaihinh_dt"><?php echo $lang_lhdt; ?></div>
                              <div id="loaihinh_dt" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->loaihinh_dt); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm chuyennganh_dt"><?php echo $lang_cndt; ?></div>
                              <div id="chuyennganh_dt" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->chuyennganh_dt); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm dang_ngay"><?php echo $lang_knd_d; ?></div>
                              <div id="dang_ngay" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->dang_ngay); ?></div>

                              <div class="tx_nm dang_thang"><?php echo $lang_m_cmnd; ?></div>
                              <div id="dang_thang" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->dang_thang); ?></div>
                              <div class="tx_nm dang_nam"><?php echo $lang_y_cmnd; ?></div>
                              <div id="dang_nam" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->dang_nam); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm dang_ketnap"><?php echo $lang_knd_w; ?></div>
                              <div id="dang_ketnap" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->dang_ketnap); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm doan_ngay"><?php echo $lang_dtn_d; ?></div>
                              <div id="doan_ngay" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->doan_ngay); ?></div>
                              <div class="tx_nm doan_thang"><?php echo $lang_m_cmnd; ?></div>
                              <div id="doan_thang" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->doan_thang); ?></div>
                              <div class="tx_nm doan_nam"><?php echo $lang_y_cmnd; ?></div>
                              <div id="doan_nam" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->doan_nam); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm doan_ketnap"><?php echo $lang_knd_w; ?></div>
                              <div id="doan_ketnap" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->doan_ketnap); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm suckhoe"><?php echo $lang_sk; ?></div>
                              <div id="suckhoe" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->suckhoe); ?></div>
                              <div class="tx_nm cao"><?php echo $lang_cc; ?></div>
                              <div id="cao" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->cao); ?></div>
                              <div class="tx_nm can_nang"><?php echo $lang_cn; ?></div>
                              <div id="can_nang" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->can_nang); ?></div><div class="tx_nm can_nang2">kg</div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm nghenghiep_chuyenmon"><?php echo $lang_nn_cm; ?></div>
                              <div id="nghenghiep_chuyenmon" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nghenghiep_chuyenmon); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm capbac"><?php echo $lang_capbac; ?></div>
                              <div id="capbac" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->capbac); ?></div>
                              <div class="tx_nm luongchinh"><?php echo $lang_lchn; ?></div>
                              <div id="luongchinh" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->luongchinh); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm ngaynhapngu"><?php echo $lang_nnn; ?></div>
                              <div id="ngaynhapngu" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ngaynhapngu); ?></div>
                              <div class="tx_nm ngayxuatngu"><?php echo $lang_nxn; ?></div>
                              <div id="ngayxuatngu" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ngayxuatngu); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm lydo_p2"><?php echo $lang_ld_xn; ?></div>
                              <div id="lydo_p2" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->lydo_p2); ?></div>
                        </div>
                        <p class="p-head"><?php echo $lang_hcgd; ?></p>
                        <div class="p1-d1">
                              <div class="tx_nm htbo"><?php echo $lang_hvt_bo; ?></div>
                              <div id="htbo" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->htbo); ?></div>
                              <div class="tx_nm tuoibo"><?php echo $lang_tuoi; ?></div>
                              <div id="tuoibo" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tuoibo); ?></div>
                              <div class="tx_nm nn_bo"><?php echo $lang_nn; ?></div>
                              <div id="nn_bo" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nn_bo); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm bo_thang8"><?php echo $lang_trc_cm; ?></div>
                              <div id="bo_thang8" class="line d2" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->bo_thang8); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm hoten"><?php echo $lang_trong_kc; ?></div>
                              <div id="bo_khangphap" class="line d2" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->bo_khangphap); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm bo_1955"><?php echo $lang_den_nay; ?></div>
                              <div id="bo_1955" class="line d2" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->bo_1955); ?></div>
                        </div>
                 </div>           
            </div>
		<div id="page3">
                  <div class="page_ctr">
                        <div class="p1-d1">
                              <div class="tx_nm htme"><?php echo $lang_hvt_me; ?></div>
                              <div id="htme" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->htme); ?></div>
                              <div class="tx_nm tuoime"><?php echo $lang_tuoi; ?></div>
                              <div id="tuoime" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tuoime); ?></div>
                              <div class="tx_nm nn_me"><?php echo $lang_nn; ?></div>
                              <div id="nn_me" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nn_me); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm me_thang8"><?php echo $lang_trc_cm; ?></div>
                              <div id="me_thang8" class="line d2" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->me_thang8); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm me_khangphap"><?php echo $lang_trong_kc; ?></div>
                              <div id="me_khangphap" class="line d2" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->me_khangphap); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm me_1955"><?php echo $lang_den_nay; ?></div>
                              <div id="me_1955" class="line d4" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->me_1955); ?></div>
                        </div>
                        <p class="p-head">
                              <?php echo $lang_hvt_ace; ?>
                        </p>
                        <div id="giadinh" class="dn" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->giadinh); ?></div>
                  </div>
            </div>
		<div id="page4">
                  <div class="page_ctr">
                        <div class="p1-d1">
                              <div class="tx_nm hotenvc"><?php echo $lang_hvt_vc; ?></div>
                              <div id="hotenvc" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->hotenvc); ?></div>
                              <div class="tx_nm tuoivc"><?php echo $lang_tuoi; ?></div>
                              <div id="tuoivc" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tuoivc); ?></div>
                        </div>
                        <div class="p1-d1">
                             <div class="tx_nm nn_vc"><?php echo $lang_nn; ?></div>
                             <div id="nn_vc" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nn_vc); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm noi_nn_vc"><?php echo $lang_nlv; ?></div>
                              <div id="noi_nn_vc" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->noi_nn_vc); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm noio_vc"><?php echo $lang_w_hn; ?></div>
                              <div id="noio_vc" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->noio_vc); ?></div>
                        </div>
                        <div class="p1-d1">
                              <?php echo $lang_hvt_cc; ?>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm tencon1"><?php echo '1)'; ?></div>
                              <div id="tencon1" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tencon1); ?></div>
                              <div class="tx_nm tuoicon1"><?php echo $lang_tuoi; ?></div>
                              <div id="tuoicon1" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tuoicon1); ?></div>
                              <div class="tx_nm nn_con1"><?php echo $lang_nn; ?></div>
                              <div id="nn_con1" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nn_con1); ?></div>

                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm tencon1"><?php echo '2)'; ?></div>
                              <div id="tencon2" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tencon2); ?></div>
                              <div class="tx_nm tuoicon2"><?php echo $lang_tuoi; ?></div>
                              <div id="tuoicon2" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tuoicon2); ?></div>
                              <div class="tx_nm nn_con2"><?php echo $lang_nn; ?></div>
                              <div id="nn_con2" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nn_con2); ?></div>

                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm tencon1"><?php echo '3)'; ?></div>                              
                              <div id="tencon3" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tencon3); ?></div>
                              <div class="tx_nm tuoicon3"><?php echo $lang_tuoi; ?></div>
                              <div id="tuoicon3" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tuoicon3); ?></div>
                              <div class="tx_nm nn_con3"><?php echo $lang_nn; ?></div>
                              <div id="nn_con3" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nn_con3); ?></div>

                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm tencon1"><?php echo '4)'; ?></div>                              
                              <div id="tencon4" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tencon4); ?></div>
                              <div class="tx_nm tuoicon4"><?php echo $lang_tuoi; ?></div>
                              <div id="tuoicon4" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tuoicon4); ?></div>
                              <div class="tx_nm nn_con4"><?php echo $lang_nn; ?></div>
                              <div id="nn_con4" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nn_con4); ?></div>

                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm tencon1"><?php echo '5)'; ?></div>                              
                              <div id="tencon5" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tencon5); ?></div>
                              <div class="tx_nm tuoicon5"><?php echo $lang_tuoi; ?></div>
                              <div id="tuoicon5" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->tuoicon5); ?></div>
                              <div class="tx_nm nn_con5"><?php echo $lang_nn; ?></div>
                              <div id="nn_con5" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->nn_con5); ?></div>

                        </div>
                        <p class="p-head small"><?php echo $lang_hdbt; ?></p>
                        <table cellpadding="0" cellspacing="0">
                              <thead>
                                    <tr>
                                          <td width="17%"><?php echo $lang_hdbt_b; ?></td>
                                          <td width="30%"><?php echo $lang_hdbt_ct; ?></td>
                                          <td width="23%"><?php echo $lang_hdbt_w; ?></td>
                                          <td width="20%"><?php echo $lang_hdbt_cv; ?></td>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <td><div id="ht_day" class="d5" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ht_day); ?></div></td>
                                          <td><div id="ht_congtac" class="d5" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ht_congtac); ?></div></td>
                                          <td><div id="ht_odau" class="d5" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ht_odau); ?></div></td>
                                          <td><div id="ht_chucvu" class="d5" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->ht_chucvu); ?></div></td>
                                    </tr>
                              </tbody>
                        </table>
                        <p class="p-head"><?php echo $lang_hdbt_ktkl; ?></p>
                        <div class="p1-d1">
                              <div class="tx_nm khenthuong"><?php echo $lang_hdbt_kt; ?></div>
                              <div id="khenthuong" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->khenthuong); ?></div>
                        </div>
                        <div class="p1-d1">
                              <div class="tx_nm kyluat"><?php echo $lang_hdbt_kl; ?></div>
                              <div id="kyluat" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->kyluat); ?></div>
                        </div>
                        <p class="p-head small"><?php echo $lang_cam_doan; ?></p>
                        <div class="p1-d1" style="text-indent: 40px">
                             <?php echo $lang_l_cam_doan; ?>
                        </div>

                        <div class="p1-d1 l">
                              <strong><?php echo $lang_xac_nhan; ?></strong>
                              <div id="xacnhan" class="line d3" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->xacnhan); ?></div>
                        </div>

                        <div class="p1-d1 r">
                              <div id="local" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->local); ?></div>
                              <div class="tx_nm local_ngay"><?php echo ','.$lang_d_cmnd; ?></div>
                              <div id="local_ngay" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->local_ngay); ?></div>
                              <div class="tx_nm local_thang"><?php echo $lang_m_cmnd; ?></div>
                              <div id="local_thang" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->local_thang); ?></div>
                              <div class="tx_nm local_nam"><?php echo $lang_y_cmnd; ?></div>
                              <div id="local_nam" class="line" cvo-placeholder="" contenteditable="true"><?php echo '&nbsp;'.clean($prof->local_nam); ?></div>

                        <p><strong><?php echo $lang_ky_ten; ?></strong><br>
                        <i><?php echo $lang_k_ght; ?></i>
                        </p>
                        </div>


                  </div>        
            </div>
	</div>
</div>