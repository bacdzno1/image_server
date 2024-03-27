<link rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/cv.css" type="text/css">
<link id="cv-color-css" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/colors/<?php echo $color_active; ?>.css?v=1" type="text/css">
<link id="cv-font" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/fonts/<?php echo $font_active; ?>.css" type="text/css">
<link id="cv-font-size" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/font-size/<?php echo $font_size_active; ?>.css" type="text/css">
<link id="cv-cpacing-css" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/font-spacing/<?php echo $font_spacing_active; ?>.css" type="text/css">
<!-- Google font -->
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=cyrillic,cyrillic-ext,latin-ext,vietnamese" rel="stylesheet">


<div id="page-cv"> 
	<div id="cv-title" class="non-printable" contenteditable="true" cvo-validatable="true" cvo-placeholder="<?php echo $holder_title_cv; ?>"><?php echo $cv_title; ?></div>
    <div id="form-cv" class="">
        <div id="cv-main" class="">
	        <div id="cv-top" class="">
	                <div id="cvo-profile">                
	                    <div class="box-01">
	                    	<div id="cvo-profile-avatar-wraper">
	                            <img id="cvo-profile-avatar" cvo-form-field="true" src="<?php echo $avatar; ?>">
	                        </div>
	                        <div id="cvo-profile-info">
	                            <h1 class="color" ><span id="cv-profile-fullname" cvo-placeholder="<?php echo $holder_name; ?>" contenteditable="true"><?php echo $fullname; ?></span></h1>
	                            <h2><span id="cv-profile-job" contenteditable="true" cvo-placeholder="<?php echo $holder_job; ?>"><?php echo $position; ?></span></h2>
	                        </div>       
	                    </div>                            
	                </div>
	        </div>
	        <div id="cv-center">
	        	
	        	<div id="cv-content">
	                <div class="ir" id="sort_block">
	                    <?php if(!empty($block_html)){ 
	                        for($i=1;$i<=count($block_html);$i++){
	                            $block = $block_html[$i];                             
	                    ?>
	                    <div id="<?php echo $block['id']; ?>" class="cvo-block" <?php if($block['status']=='hide'){ echo ' style="display:none"'; }?>>                        
	                        <?php echo $controls; ?>
	                        <p class="head color">
	                            <span id="cvo-experience-blocktitle" class="block-title" cvo-placeholder="<?php echo $holder_block_title; ?>" contenteditable="true"><?php echo $block['title']; ?></span>
	                        </p>
	                        <div id="experience-table">
	                            <?php
	                            $j=0;
	                            foreach ($block['content'] as $bl) {
	                                $j++;
	                                echo '<div id="exp'.$j.'" class="ctbx experience">';
	                            ?>
	                                <div class="fieldgroup_controls">                               
	                                    <div class="clone"><i class="fa fa-plus"></i> <?php echo $holder_tool_add; ?></div>
	                                    <div class="remove"><i class="fa fa-minus"></i> <?php echo $holder_tool_del; ?></div>
	                                </div>
	                                <h3>
		                                <?php if($bl->title!=''){ ?>
		                                <span class="exp-title" contenteditable="true" cvo-placeholder="<?php echo $holder_block_cp_name; ?>"><?php echo $bl->title; ?></span>
		                                <?php } ?>
		                                <div class="xyz">
		                                	<?php if($bl->subtitle!=''){ ?>
			                                <p class="h3"><span class="exp-subtitle" cvo-placeholder="<?php echo $holder_block_job; ?>" contenteditable="true"><?php echo $bl->subtitle; ?></span>
			                                <?php } ?>
			                                </p>
			                                <?php if($bl->date!=''){ ?>
			                                <span class="exp-date" contenteditable="true" cvo-placeholder="<?php echo $holder_block_time; ?>"><?php echo $bl->date; ?></span>
			                                <?php } ?>
		                                </div>
		                                <div class="exp-content" contenteditable="true" cvo-placeholder="<?php echo $holder_block_job_info; ?>">
	                                   		<?php echo $bl->content; ?>
	                              		</div>
	                                </h3>
	                            <?php echo '</div>'; } ?>                     
	                        </div>
	                    </div>
	                    <?php } } ?>
	                </div>
	        	</div>
	        	<!-- Hết CV content -->
	        	<div id="cv-right">
		                <div class="ir">                    

		                    <div id="sortable">
		                        <?php           
		                        if(!empty($menu_html)){
		                        for($i=1;$i<=count($menu_html);$i++){
		                            $m = $menu_html[$i];
		                            echo '<div id="'.$m['id'].'" class="'.$m['class'].'"';
		                            if($m['status']=='hide'){ echo ' style ="display:none"';}
		                            echo '>';               
		                        ?>                      
		                        <?php if($m['type']=="profile"){ ?> 
		                            <div class="hasclass">
		                            	<p class="icoweb color"> 
			                            	<span class="cv-hi"><i class="fa fa-birthday-cake color"></i></span> 
			                            	<span class="cv-ico-center">:</span>
			                            	<span id="cv-profile-birthday" cvo-placeholder="<?php echo $holder_birthday; ?>" contenteditable="true"><?php echo $m['content']->birthday; ?></span>
			                            </p>

			                            <p class="icoweb color">
			                            	<span class="cv-hi"><i class="fa fa-user color"></i></span> 
			                            	<span class="cv-ico-center">:</span>
			                            	<span id="cv-profile-sex" cvo-placeholder="<?php echo $holder_sex; ?>" contenteditable="true"><?php echo $m['content']->sex; ?></span>
			                            </p>

			                            <p class="icoweb color">
			                            	<span class="cv-hi"><i class="fa fa-phone color"></i></span> 
			                            	<span class="cv-ico-center">:</span>
			                            	<span id="cv-profile-phone" cvo-placeholder="<?php echo $holder_phone; ?>" contenteditable="true"><?php echo $m['content']->phone; ?></span>
			                            </p>

			                            <p class="icoweb color">
			                            	<span class="cv-hi"><i class="fa fa-envelope color"></i></span> 
			                            	<span class="cv-ico-center">:</span>
			                            	<span id="cv-profile-email" cvo-placeholder="<?php echo $holder_email; ?>" contenteditable="true"><?php if(isset($email)){echo $email;}else{echo $m['content']->email;} ?></span>
			                            </p>

			                            <p class="icoweb color">
			                            	<span class="cv-hi"><i class="fa fa-map-marker color"></i></span> 
			                            	<span class="cv-ico-center">:</span>
			                            	<span id="cv-profile-address" cvo-placeholder="<?php echo $holder_address; ?>" contenteditable="true"><?php echo $m['content']->address; ?></span>
			                            </p>

			                            <p class="icoweb color">
			                            	<span class="cv-hi"><i class="fa fa-info color"></i></span> 
			                            	<span class="cv-ico-center">:</span>
			                            	<span id="cv-profile-face" cvo-placeholder="<?php echo $holder_face; ?>" contenteditable="true"><?php echo $m['content']->face; ?></span>
			                            </p>
		                            </div>
		                        <?php }
		                        else if($m['type']=="skill"){ ?>
		                            <?php echo $controls; ?>
		                        <p class="h3 color"><span id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="<?php echo $holder_box_title; ?>" class="box-title"><?php echo $m['title']; ?></span></p>
		                            <div class="exp content-edit skill">
		                                <?php foreach ($m['content'] as $k) { ?>
		                                    <div class="ctbx">
		                                        <div class="fieldgroup_controls">
		                                            <div class="clone"><i class="fa fa-plus"></i> <?php echo $holder_tool_add; ?></div>
		                                            <div class="edit js-edit-content"> <?php echo $holder_tool_edit; ?></div>
		                                            <div class="remove"><i class="fa fa-minus"></i> <?php echo $holder_tool_del; ?></div>
		                                        </div>   
		                                        <p class="skill-name"><input type="text" value="<?php echo $k->name; ?>"></p>
		                                        <span class="bar-exp"><span style="width: <?php echo $k->exp.'%'; ?>"></span></span>
		                                        <span class="bar-value-exp"><input min="0" max="100" type="text" value="<?php echo $k->exp; ?>"></span>
		                                    </div>
		                                <?php } ?>
		                            </div>
		                        <?php }else{ ?>
		                            <?php echo $controls; ?>
		                            <p class="h3 color">
		                            <span id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="<?php echo $holder_box_title; ?>" class="box-title"><?php echo $m['title']; ?></span></p>
		                            <span class="box-content" cvo-placeholder="<?php echo $holder_box_content; ?>" contenteditable="true">
		                                <?php echo $m['content']; ?>
		                            </span>
		                        <?php } 
		                        echo '</div>';
		                        } } ?>
		                    </div>
		                </div>
		        </div>
				<!-- Hết CV Right -->
	        </div>
        </div>
    </div>
</div>
<script type="text/javascript">
	$(function() {
		var a = $('#sortable #box01.cvo-block');
		var x = $('#sortable #box01.cvo-block').innerHeight();
		var i = $('#cv-center');
		time();
		function time(){
			a.on('click',function(){
				var set = setInterval(function(){
					y = $('#sortable #box01.cvo-block').innerHeight();
					k = y - x;
					u = 70;
					if(k > 0) {i.css({'paddingTop':u+k+'px'});}else {
						i.css({'paddingTop':u+'px'});
					}
				},300)
			})
		}
	});
</script>