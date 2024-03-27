<link rel="stylesheet" href="upload/donxinviec/<?php echo $item->alias; ?>/css/letter.css" type="text/css">
<link id="cv-color-css" rel="stylesheet" href="upload/donxinviec/<?php echo $item->alias; ?>/css/colors/<?php echo $color_active; ?>.css" type="text/css">
<link id="cv-font" rel="stylesheet" href="upload/donxinviec/<?php echo $item->alias; ?>/css/fonts/<?php echo $font_active; ?>.css" type="text/css">
<link id="cv-font-size" rel="stylesheet" href="upload/donxinviec/<?php echo $item->alias; ?>/css/font-size/<?php echo $font_size_active; ?>.css" type="text/css">
<link id="cv-cpacing-css" rel="stylesheet" href="upload/donxinviec/<?php echo $item->alias; ?>/css/font-spacing/<?php echo $font_spacing_active; ?>.css" type="text/css">

<div id="page-letter">
	<div id="letter-title" class="non-printable" contenteditable="true" cvo-placeholder="<?php echo $holder_tt; ?> "><?php echo $lt_title; ?></div>
	<div id="form-letter">			
		<div id="lt-top">			
			<?php echo $dxv_ch; ?>
			<h1><?php echo $dxv_name; ?></h1>
		</div>
		<div id="lt-content">
			<div class="ir">
				<div class="lt-box">
					<p><?php echo $dxv_kg; ?> <span id="lto-user-to" cvo-placeholder="<?php echo $holder_kg; ?>" contenteditable="true"><?php echo $cv->user_to; ?></span></p>
					<p><?php echo $dxv_hvt; ?> <span id="lto-name" cvo-placeholder="<?php echo $holder_name; ?>" contenteditable="true"><?php echo $name; ?></span></p>
					<p><?php echo $dxv_sn; ?> <span id="lto-birthday" cvo-placeholder="<?php echo $holder_birthday; ?>" contenteditable="true"><?php echo $birthday; ?></span></p>
					<p><?php echo $dxv_dc; ?> <span id="lto-address" cvo-placeholder="<?php echo $holder_address; ?>" contenteditable="true"><?php echo $address; ?></span></p>
				</div>
				<div id="lto-content" cvo-placeholder="<?php echo $holder_box_content; ?>" contenteditable="true">
					<?php echo $cv->content; ?>
				</div>
				
			</div>
		</div>		
		
	</div>
</div>