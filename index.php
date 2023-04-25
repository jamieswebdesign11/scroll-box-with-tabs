<!-- Scroll box with tabs -->
<?php if(have_rows('projects')): ?> 
<div id="projects"> 
    <div class="projects-inner"> 
        <div class="projects-menu flex-display"> 
            <?php $i=0; while(have_rows('projects')): the_row(); $i++; 
            $image = get_sub_field('image'); $heading = get_sub_field('heading'); $id = seo_friendly_url($heading); 
            ?> 
            <div class="project-menu-box flex-col"> 
                <a href="#<?php echo $id; ?>" data-toggle="tab"> 
                    <?php echo $image ? '<img class="img-responsive center-block" src="'. $image['url'] .'" title="'. $image['title'] .'" alt="'. $image['alt'] .'">' : ''; ?> 
                    <?php echo $heading ? '<span class="anchor-link-title">'. $heading .'</span>' : ''; ?> 
                </a> 
            </div> 
            <?php endwhile; ?> 
        </div> 
        <div class="project-content"> 
            <div class="tab-content"> 
                <?php $i=0; while(have_rows('projects')): the_row(); $i++; 
                $heading = get_sub_field('heading'); $projectsShown = get_sub_field('projects_shown'); $id = seo_friendly_url($heading); 
                ?> 
                <div class="<?php echo $i==1 ? ' active in' : ''; ?> fade" id="<?php echo $id; ?>"> 
                    <?php echo $heading ? '<h2>'. $heading .'</h2>' : ''; ?> 
                    <?php if(have_rows('projects_list')): ?> 
                    <div class="projects-scroller" data-items-shown="<?php echo $projectsShown; ?>"> 
                        <div class="scroller-box"> 
                            <?php while(have_rows('projects_list')): the_row(); 
                            $projectName = get_sub_field('project_name'); $projectDescription = get_sub_field('project_description'); 
                            ?> 
                            <div class="scroll-item-box flex-display"> 
                                <?php echo $projectName ? '<div class="project-name flex-30">'. $projectName .'</div>' : ''; ?> 
                                <?php echo $projectDescription ? '<div class="project-description flex-70">'. $projectDescription .'</div>' : ''; ?> 
                            </div> 
                            <?php endwhile; ?> 
                        </div> 
                        <div class="scrolls"> 
                            <div class="scroll-up"><i class="fa fa-chevron-up" aria-hidden="true"></i></div> 
                            <div class="scroll-down"><i class="fa fa-chevron-down" aria-hidden="true"></i></div> 
                        </div> 
                    </div> 
                    <?php endif; ?> 
                </div> 
                <?php endwhile; ?> 
            </div> 
        </div> 
    </div> 
</div> 
<?php endif; ?>