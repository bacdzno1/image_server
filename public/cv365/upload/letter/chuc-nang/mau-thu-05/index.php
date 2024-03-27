<link rel="stylesheet" href="upload/letter/<?php echo $item->alias; ?>/css/letter.css" type="text/css">
<link id="cv-color-css" rel="stylesheet" href="upload/letter/<?php echo $item->alias; ?>/css/colors/<?php echo $color_active; ?>.css" type="text/css">
<link id="cv-font" rel="stylesheet" href="upload/letter/<?php echo $item->alias; ?>/css/fonts/<?php echo $font_active; ?>.css" type="text/css">
<link id="cv-font-size" rel="stylesheet" href="upload/letter/<?php echo $item->alias; ?>/css/font-size/<?php echo $font_size_active; ?>.css" type="text/css">
<link id="cv-cpacing-css" rel="stylesheet" href="upload/letter/<?php echo $item->alias; ?>/css/font-spacing/<?php echo $font_spacing_active; ?>.css" type="text/css">

<div id="page-letter">
	<div id="letter-title" class="non-printable" contenteditable="true" cvo-placeholder="Tiêu đề CV"><?php echo $lt_title; ?></div>
	<div id="form-letter">			
		<div id="lt-top">					
			<div id="cvo-profile-avatar-wraper">
                <img id="cvo-profile-avatar" cvo-form-field="true" src="<?php echo $avatar; ?>">
            </div>	
			<h1><span id="lto-name" cvo-placeholder="Họ tên" contenteditable="true"><?php echo $name; ?></span></h1>
			<h2><span id="lto-job" cvo-placeholder="Nghề nghiệp" contenteditable="true"><?php echo $lto_job; ?></span></h2>
			<div class="box-01"><span id="lto-about" cvo-placeholder="Giới thiệu bản thân" contenteditable="true"><?php echo $lto_about; ?></span></div>
			<div class="clr"></div>
		</div>
		<div id="lt-right">	
			<div class="ir">
				<div class="box-02">
					<div class="ic iw">
                        <p class="icf"><i class="fa">&#xf041;</i></p>
                        <p class="icoweb"><span id="lto-address" cvo-placeholder="Địa chỉ" contenteditable="true"><?php echo $address; ?></span></p>
                    </div>						
					
                    <div class="ic">
                        <p class="icf"><i class="fa">&#xf095;</i></p>
                        <p class="icoweb"><span id="lto-phone" cvo-placeholder="Số điện thoại" contenteditable="true"><?php echo $phone; ?></span></p>
                    </div>
                    <div class="ic iw">
                        <p class="icf"><i class="fa">&#xf199;</i></p>
                        <p class="icoweb"><span id="lto-email" cvo-placeholder="Email" contenteditable="true"><?php echo $email; ?></span></p>
                    </div>		

                    <div class="ic">
                        <p class="icf"><i class="fa">&#xf129;</i></p>
                        <p class="icoweb"><span id="lto-user-to" cvo-placeholder="Địa chỉ Facebook" contenteditable="true"><?php echo $user_to; ?></span></p>
                    </div>	

					<div class="clr"></div>
				</div>
			</div>
		</div>					
		<div id="lt-content">
			<div class="ir">
				<div id="lto-content" cvo-placeholder="Nội dung" contenteditable="true">
					<?php echo $lto_content; ?>
				</div>
			</div>
		</div>		

	</div>
</div>