<!--Top sale-->
<?php
    $topsale_shuffle=$topsale->getData();

?>
<section id="top-sale">
            <div class="container py-5">
                <h4 class="font-rubik font-size-20 ">Top Sale</h4>
                <hr>
                <!--Owl Carousel-->
                
                <div class="owl-carousel owl-theme">
                <?php foreach($topsale_shuffle as $item) {?>
                    
                    <div class="item py-2">

                        <div class="product font-rale">
                        <a href="<?php printf('%s?item_id=%s', 'topsale.php',  $item['item_id']); ?>"><img src="<?php echo $item['item_image']?? "./assest/products/T1.jpg"; ?>" alt="product" class="img-fluid"></a><br>
                            <div class="text-center">
                                <h6><?php echo $item['item_name']?? "Unknows"; ?> </h6>
                            <div class="rating text-warning font-size-12">
                                <span>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </span>
                            </div>
                            <div class="price py-2">
                                <span><?php echo $item['item_price']?? '0'; ?></span>
                            </div>
                            <button type="submit" class="btn btn-warning font-size-12"><i class="fas fa-shopping-cart"></i>|Add to cart</button>
                                </div>
                                </div>
                    <?php }//closing for each function ?>
                   </div>
                    
                
                    
                </div>
            <!--!Owl Carousel-->
            </div>
        </section>

        <!--!Top sale-->