<link rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/cv.css" type="text/css">
<link id="cv-color-css" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/colors/<?php echo $color_active; ?>.css?v=1" type="text/css">
<link id="cv-font" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/fonts/<?php echo $font_active; ?>.css" type="text/css">
<link id="cv-font-size" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/font-size/<?php echo $font_size_active; ?>.css" type="text/css">
<link id="cv-cpacing-css" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/font-spacing/<?php echo $font_spacing_active; ?>.css" type="text/css">

<div id="page-cv">
    <div id="cv-title" class="non-printable" contenteditable="true" cvo-validatable="true" cvo-placeholder="<?php echo $holder_title_cv; ?>"><?php echo $cv_title; ?></div>
    <div id="form-cv">

        <div id="cv-top">
            <div id="box-hvt">
                <h1><span id="cv-profile-fullname" cvo-placeholder="<?php echo $holder_name; ?>" contenteditable="true"><?php echo $fullname; ?></span></h1>
                <h2><span id="cv-profile-job" contenteditable="true" cvo-placeholder="<?php echo $holder_job; ?>"><?php echo $position; ?></span></h2>
                <p><span id="cv-profile-about"></span></p>
            </div>
        </div>
        <div class="cv_tt">
            <div id="cv-main">
                <div id="cv-content">
                    <div class="ir" id="sort_block">
                        <?php if (!empty($block_html)) {
                            for ($i = 1; $i <= count($block_html); $i++) {
                                $block = $block_html[$i];
                        ?>
                                <div id="<?php echo $block['id']; ?>" class="cvo-block" <?php if ($block['status'] == 'hide') {
                                                                                            echo ' style="display:none"';
                                                                                        } ?>>
                                    <?php echo $controls; ?>
                                    <p class="head">
                                        <span id="cvo-experience-blocktitle" class="block-title" cvo-placeholder="<?php echo $holder_block_title; ?>" contenteditable="true"><?php echo $block['title']; ?></span>
                                    </p>
                                    <div id="experience-table">
                                        <?php
                                        $j = 0;
                                        foreach ($block['content'] as $bl) {
                                            $j++;
                                            echo '<div id="exp' . $j . '" class="ctbx experience">';
                                        ?>
                                            <div class="fieldgroup_controls">
                                                <div class="clone"><i class="fa fa-plus"></i> <?php echo $holder_tool_add; ?></div>
                                                <div class="remove"><i class="fa fa-minus"></i> <?php echo $holder_tool_del; ?></div>
                                            </div>
                                            <?php if ($bl->title != '') { ?>
                                                <h3>
                                                    <span class="exp-title" contenteditable="true" cvo-placeholder="<?php echo $holder_block_cp_name; ?>"><?php echo $bl->title; ?></span>
                                                    <?php if ($bl->date != '') { ?>
                                                        <span class="exp-date" contenteditable="true" cvo-placeholder="<?php echo $holder_block_time; ?>"><?php echo $bl->date; ?></span>
                                                    <?php } ?>
                                                </h3>
                                            <?php } ?>
                                            <?php if ($bl->subtitle != '') { ?>
                                                <p class="h3"><span class="exp-subtitle" cvo-placeholder="<?php echo $holder_block_job; ?>" contenteditable="true"><?php echo $bl->subtitle; ?></span>
                                                </p>
                                            <?php } ?>

                                            <div class="exp-content" contenteditable="true" cvo-placeholder="<?php echo $holder_block_job_info; ?>">
                                                <?php echo $bl->content; ?>
                                            </div>
                                        <?php echo '</div>';
                                        } ?>
                                    </div>
                                </div>
                        <?php }
                        } ?>
                    </div>
                </div>
                <div id="cv-right">
                    <div class="ir">
                        <div class="box-01">
                            <div id="cvo-profile-avatar-wraper">
                                <img id="cvo-profile-avatar" cvo-form-field="true" src="<?php echo $avatar; ?>">
                            </div>
                            <div class="clr"></div>
                        </div>

                        <div id="sortable">
                            <?php
                            if (!empty($menu_html)) {
                                for ($i = 1; $i <= count($menu_html); $i++) {
                                    $m = $menu_html[$i];
                                    echo '<div id="' . $m['id'] . '" class="' . $m['class'] . '"';
                                    if ($m['status'] == 'hide') {
                                        echo ' style ="display:none"';
                                    }
                                    echo '>';
                            ?>
                                    <?php if ($m['type'] == "profile") { ?>
                                        <p class="h3"><span id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="<?php echo $holder_box_title; ?>" class="box-title"><?php echo $m['title']; ?></span></p>
                                        <p class="icoweb cvi-date"><i class="fa">&#xf1fd</i> <span id="cv-profile-birthday" cvo-placeholder="<?php echo $holder_birthday; ?>" contenteditable="true"><?php echo $m['content']->birthday; ?></span></p>
                                        <p class="icoweb cvi-user"><i class="fa">&#xf221</i> <span id="cv-profile-sex" cvo-placeholder="<?php echo $holder_sex; ?>" contenteditable="true"><?php echo $m['content']->sex; ?></span></p>
                                        <p class="icoweb cvi-phone"><i class="fa">&#xf2a0</i> <span id="cv-profile-phone" cvo-placeholder="<?php echo $holder_phone; ?>" contenteditable="true"><?php echo $m['content']->phone; ?></span></p>
                                        <p class="icoweb cvi-envelope-square"><i class="fa">&#xf0e0</i> <span id="cv-profile-email" cvo-placeholder="<?php echo $holder_email; ?>" contenteditable="true"><?php if (isset($email)) {
                                                                                                                                                                                                                echo $email;
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                echo $m['content']->email;
                                                                                                                                                                                                            } ?></span></p>
                                        <p class="icoweb cvi-map-marker"><i class="fa">&#xf041</i> <span id="cv-profile-address" cvo-placeholder="<?php echo $holder_address; ?>" contenteditable="true"><?php echo $m['content']->address; ?></span></p>
                                        <div class="line"></div>
                                    <?php } else if ($m['type'] == "skill") { ?>
                                        <?php echo $controls; ?>
                                        <h3><span id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="<?php echo $holder_box_title; ?>" class="box-title"><?php echo $m['title']; ?></span></h3>
                                        <div class="exp content-edit skill">
                                            <?php foreach ($m['content'] as $k) { ?>
                                                <div class="ctbx">
                                                    <div class="fieldgroup_controls">
                                                        <div class="clone"><i class="fa fa-plus"></i> <?php echo $holder_tool_add; ?></div>
                                                        <div class="edit js-edit-content"> <?php echo $holder_tool_edit; ?></div>
                                                        <div class="remove"><i class="fa fa-minus"></i> <?php echo $holder_tool_del; ?></div>
                                                    </div>
                                                    <p class="skill-name" cv-form-field="true" contenteditable="true"><?php echo $k->name; ?></p>
                                                    <div class="bar-exp">
                                                        <div style="width: <?php echo $k->exp . '%'; ?>"></div>
                                                    </div>
                                                    <div class="bar-value-exp"><input min="0" max="100" type="text" value="<?php echo $k->exp; ?>"></div>
                                                </div>
                                            <?php } ?>
                                            <div class="clr"></div>
                                        </div>
                                    <?php } else { ?>
                                        <?php echo $controls; ?>
                                        <h3>
                                            <span id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="<?php echo $holder_box_title; ?>" class="box-title"><?php echo $m['title']; ?></span>
                                        </h3>
                                        <p><span class="box-content" cvo-placeholder="<?php echo $holder_box_content; ?>" contenteditable="true">
                                                <?php echo $m['content']; ?>
                                            </span></p>
                            <?php }
                                    echo '</div>';
                                }
                            } ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ft"></div>
            <div class="watermark">© Timviec365.vn</div>

        </div>
    </div>

</div>