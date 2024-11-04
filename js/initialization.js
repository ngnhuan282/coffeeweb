//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Bạc Xỉu',
            img: './images/bacxiu.png',
            category: 'Cà phê',
            price: 39000,
            desc: 'Bạc sỉu chính là "Ly sữa trắng kèm một chút cà phê". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Bạc Xỉu Lắc Sữa Yến Mạch',
            img: './images/bacxiuyenmach.png',
            category: 'Cà phê',
            price: 49000,
            desc: 'Ngày thêm rộn ràng với Bạc Xỉu Lắc Sữa Yến Mạch. Cà phê phin Robusta đượm hương “lắc tới bến” cùng sữa yến mạch sánh mịn và đá đập mát lạnh. Lắc trước rồi hớp, hớp trực tiếp từ nắp lại càng ngon. *Để giữ trọn vị, Bạc Xỉu Lắc luôn được phục vụ kèm đá với định lượng đá không đổi.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Cà phê đen đá',
            img: './images/caphedenda.png',            
            category: 'Cà phê',
            price: 35000,
            desc: 'Như trong mv của Amee , Đen đá nhưng có đường đậm chất hương vị Việt Nam , đậm đà hơn cà phê Laura của Nhật Kim Anh. Uống xong rất tỉnh táo và hùng hục sức khỏe.'
        },
        {
            id: 4,
            status: 1, 
            title: 'Cà phê sữa đá',
            img: './images/caphesuada.png',            
            category: 'Cà phê',
            price: 39000,
            desc: 'Cà phê sữa đá phổ biển và đậm chất Việt , là thức uống gần như hằng ngày của mỗi người giúp tỉnh táo và còn hỗ trợ cho đường ruột.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Cold brew truyền thống',
            img: './images/coldbrew.png',            
            category: 'Cà phê',
            price: 39000,
            desc: 'Là món đậm chất phương Tây còn được gọi là cà phê ủ lạnh. Được pha chế từ loại bột cà phê cao cấp nhất mang hương vị chua, hương thơm trái cây và đắng nhẹ hợp gu của rất nhiều người.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Cold brew phúc bồn tử',
            img: './images/coldbrewphucbontu.png',            
            category: 'Cà phê',
            price: 49000,
            desc: 'Cold brew phổ biến ở phương Tây giờ đây đã được pha thêm chút hương vị châu Á đó là phúc bồn tử , mang lại sự lạ miệng nhưng rất đáng để thử.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Oolong tứ quý trân châu',
            img: './images/oolongtranchau.png',      
            category: 'Trà trái cây',  
            price: 49000,
            desc: 'Lá trà Oolong tứ quý hảo hạn mang tới hương vị thanh mát, dịu nhẹ cùng với sự ngọt ngọt dai dai rất dính của trân châu đường đen được chế biến kỹ lưỡng , một món nước rất Genz nhưng cũng không kém người dùng.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Oolong tứ quý sen',
            img: './images/oolongtuquysen.png',      
            category: 'Trà trái cây',  
            price: 49000,
            desc: 'Lá trà Oolong tứ quý hảo hạn mang tới hương vị thanh mát, dịu nhẹ cùng với sự ngọt bùi của hạt sen dễ dàng chạm tới lòng người.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Oolong tứ quý vải',
            img: './images/oolongtuquyvai.png',      
            category: 'Trà trái cây',  
            price: 49000,
            desc: 'Lá trà Oolong tứ quý hảo hạn mang tới hương vị thanh mát, dịu nhẹ cùng với hương thơm tươi mát của trái vải dễ dàng chạm tới lòng người .',
        },
        {
            id: 10,
            status: 1, 
            title: 'Trà đào cam sả',
            img: './images/tradaocamsa.png',      
            category: 'Trà trái cây',  
            price: 39000,
            desc: 'Trà đào cam sả có vị đậm ngọt thanh của đào, vị chua chua dịu nhẹ của cam và hương thơm của sả.',
        },
        {
            id: 11,
            status: 1, 
            title: 'Trà kombucha',
            img: './images/trakombucha.png',      
            category: 'Trà trái cây',  
            price: 39000,
            desc: 'Một món trà mới tại thị trường Việt Nam , trà được lên men từ men Kombucha rất healthy , hỗ trợ giảm cân , tăng cường đề kháng.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Trà đào kombucha',
            img: './images/tradaokombucha.png',      
            category: 'Trà trái cây',  
            price: 49000,
            desc: 'Một món trà mới tại thị trường Việt Nam , trà được lên men từ men Kombucha và đào tươi rất healthy , hỗ trợ giảm cân , tăng cường đề kháng.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Hồng trà sữa trân châu',
            img: './images/hongtrasuatranchau.png',      
            category: 'Trà sữa',  
            price: 49000,
            desc: 'Là món rất quen thuộc và phổ biến với giới trẻ. Nhưng hương vị của nó không hề đơn giản khi được sử dụng lá hồng trà nhập khẩu hảo hạng mang tới hương vị không thể quên.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Trà sữa Oolong',
            img: './images/trasuaoolong.png',      
            category: 'Trà sữa',  
            price: 49000,
            desc: 'Là thức uống đơn giản nhưng độc nhất của Lucy nhưng không hề kém người dùng khi là best seller của quán.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Trà sữa Oolong nướng sương sáo',
            img: './images/trasuaoolongnuongsuongsao.png',      
            category: 'Trà sữa',  
            price: 59000,
            desc: 'Vị khói từ lửa khi nướng lá trà Oolong hảo hạn mang tới hương vị không nơi nào tạo được. Cùng với sương sáo giòn dai ngon khó ngưỡng.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Trà sữa Oolong tứ quý bơ',
            img: './images/trasuaoolongtuquybo.png',      
            category: 'Trà sữa',  
            price: 59000,
            desc: 'Là sự kết hợp mới mẻ và đa dạng của sinh tố bơ và trà sữa Oolong . Mang tới hương vị lạ nhưng ngon khó cưỡng và khó thể quên.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Trà sữa Oolong tứ quý sương sáo',
            img: './images/trasuaoolongtuquysuongsao.png',      
            category: 'Trà sữa',  
            price: 59000,
            desc: ' Lá trà Oolong tứ quý hảo hạn mang tới hương vị thanh mát, dịu nhẹ cùng với thạch dai dai giòn giòn của sương sáo uống cực kì cuốn.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Trà đen machiato',
            img: './images/tradenmachiato.png',      
            category: 'Trà sữa',  
            price: 49000,
            desc: 'Dẫu là món khá ít phổ biến ở Việt Nam nhưng hương vị rất nịnh miệng từ vị đắng vị thơm của trà cùng với lớp kem béo tuyệt.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Frosty Phin',
            img: './images/frostyphin.png',      
            category: 'Đá xay',
            price: 59000,
            desc: 'Đá Xay Frosty Phin là lựa chọn không thể bỏ lỡ cho tín đồ cà phê. Cà phê nguyên chất pha phin truyền thống, thơm đậm đà, đắng mượt mà, quyện cùng kem sữa béo ngậy và đá xay mát lạnh. Nhân đôi vị cà phê nhờ có thêm thạch cà phê đậm đà, giòn dai. Thức uống khơi ngay sự tỉnh táo tức thì. Lưu ý: Khuấy đều phần đá xay trước khi dùng'
        },
        {
            id: 20,
            status: 1, 
            title: 'Frosty Cà phê đường đen',
            img: './images/frostycaphe.png',      
            category: 'Đá xay',
            price: 59000,
            desc: 'Đá Xay Frosty Cà Phê Đường Đen mát lạnh, sảng khoái ngay từ ngụm đầu tiên nhờ sự kết hợp vượt chuẩn vị quen giữa Espresso đậm đà và Đường Đen ngọt thơm. Đặc biệt, whipping cream beo béo cùng thạch cà phê giòn dai, đậm vị nhân đôi sự hấp dẫn, khơi bừng sự hứng khởi trong tích tắc.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Frosty Caramel Arabica',
            img: './images/frostycaramel.png',      
            category: 'Đá xay',
            price: 59000,
            desc: 'Caramel ngọt thơm quyện cùng cà phê Arabica Cầu Đất đượm hương gỗ thông, hạt dẻ và nốt sô cô la đặc trưng tạo nên Đá Xay Frosty Caramel Arabica độc đáo chỉ có tại Nhà. Cực cuốn với lớp whipping cream béo mịn, thêm thạch cà phê giòn ngon bắt miệng.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Frosty Dâu',
            img: './images/frostydau.png',      
            category: 'Đá xay',
            price: 59000,
            desc: 'Bồng bềnh như một đám mây, Đá Xay Frosty Dâu vừa ngon mắt vừa chiều vị giác bằng sự ngọt ngào. Bắt đầu bằng cái chạm môi với lớp kem whipping cream, cảm nhận ngay vị beo béo lẫn sốt dâu thơm lừng. Sau đó, hút một ngụm là cuốn khó cưỡng bởi đá xay mát lạnh quyện cùng sốt dâu ngọt dịu. Lưu ý: Khuấy đều phần đá xay trước khi dùng'
        },

        {
            id: 23,
            status: 1, 
            title: 'Frosty ChocoChip',
            img: './images/frostychoco.png',      
            category: 'Đá xay',
            price: 59000,
            desc: 'Đá Xay Frosty Choco Chip, thử là đã! Lớp whipping cream bồng bềnh, beo béo lại có thêm bột sô cô la và sô cô la chip trên cùng. Gấp đôi vị ngon với sô cô la thật xay với đá sánh mịn, đậm đà đến tận ngụm cuối cùng.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Frosty Matcha',
            img: './images/frostymatcha.png',      
            category: 'Đá xay',
            price: 59000,
            desc: 'Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!'
        },
        {
            id: 25,
            status: 1, 
            title: 'Mochi Kem Dâu',
            img: './images/mochidau.png',      
            category: 'Bánh ngọt',
            price: 19000,
            desc: 'Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân dâu ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.'
        },

        {
            id: 26,
            status: 1, 
            title: 'Mochi Kem Chocolate',
            img: './images/mochichocolate.png',      
            category: 'Bánh ngọt',
            price: 19000,
            desc: 'Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân chocolate độc đáo. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Mochi Kem Việt Quất',
            img: './images/mochivietquat.png',      
            category: 'Bánh ngọt',
            price: 19000,
            desc: 'Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân việt quất đặc trưng thơm thơm, ngọt dịu. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Mochi Kem Matcha',
            img: './images/mochimatcha.png',      
            category: 'Bánh ngọt',
            price: 19000,
            desc: 'Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân trà xanh đậm vị. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Bánh Gấu Chocolate',
            img: './images/banhgau.png',      
            category: 'Bánh ngọt',
            price: 19000,
            desc: 'Với vẻ ngoài đáng yêu và hương vị ngọt ngào, thơm béo nhất định bạn phải thử ít nhất 1 lần.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Bánh Tiramisu',
            img: './images/tiramisu.png',      
            category: 'Bánh ngọt',
            price: 19000,
            desc: 'Hương vị dễ ghiền được tạo nên bởi chút đắng nhẹ của cà phê, lớp kem trứng béo ngọt dịu hấp dẫn'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Hoàng Gia Bảo",
            phone: "hgbaodev",
            password: "123456",
            address: 'https://github.com/hgbaodev',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Nguyễn Nhuận",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();