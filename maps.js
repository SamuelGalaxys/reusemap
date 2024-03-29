//
// Google maps
//



var $map = $('#map-default'),
    map,
    lat,
    lng,
    color = "#5e72e4";

    function initMap() {

        var map = new google.maps.Map(document.getElementById('map-default'), {

            //처음 중심 좌표
            center: {
                lat: 37.51773521194588,
                lng: 126.9918544673078
            },zoom: 13,gestureHandling: 'greedy'

        });
 


 

        var dbRef= firebase.database().ref('maps');
        dbRef.on('value', function(snapshot) {
        snapshot.forEach(function(child) {
        var childs=child.val();
        var marker = new google.maps.Marker({
              position: {lat: childs.lat, lng: childs.lang},
              map: map
              });
           });
       });

       

       



        function getLocation() {
            if (navigator.geolocation) { // GPS를 지원하면
              navigator.geolocation.getCurrentPosition(function(position) {

                //팝업창에 띄우기
              //  alert(position.coords.latitude + ' ' + position.coords.longitude);

              //지도 초기 설정
                var map = new google.maps.Map(document.getElementById('map-default'), {

                    //처음 중심 좌표
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },zoom: 18,gestureHandling: 'greedy'
 
                    
 


                });





        //마커 생성
        var marker, i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                icon: customicon,
                map: map
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
            if (marker) {
                marker.addListener('click', function () {
                    map.setCenter(this.getPosition());
                    map.setZoom(14);
                });
            }
        }
        //마커 생성



              }, function(error) {
                console.error(error);
              }, {
                enableHighAccuracy: false,
                maximumAge: 0,
                timeout: Infinity
              });

            } else {
              
                var map = new google.maps.Map(document.getElementById('map-default'), {

                    //처음 중심 좌표
                    center: {
                        lat: 37.51773521194588,
                        lng: 126.9918544673078
                    },zoom: 10,gestureHandling: 'greedy'
        
                });


            }
        }
          getLocation();

 
          
 
          

        //지도 위에 표시할 마커와 인포윈도우 객체 생성
        function addgooglemappinusingfirebase(lat, lng, name, address) {
            var marker = new google.maps.Marker({
                position: {
                    lat: lat,
                    lng: lng
                },
                map: map,
                title: name,
                label: {
                    text: name,
                    color: color,
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            });
            var content = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h4 id="firstHeading" class="firstHeading">' + name + '</h4>' +
                '<div id="bodyContent">' +
                '<p><b>' + address + '</b></p>' +
                '</div>' +
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: content
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        }

        


 




  
        //마커 정보
        var locations = [



            //경복궁 마커
            ['<div class="wrap"><div class="text-box"><h4>경복궁</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="https://www.royalpalace.go.kr/"><p>홈페이지 방문하기</p></a></div>', 37.577624, 126.976020],

            //녹사평
            ['<div class="wrap"><div class="text-box"><h4>녹사평역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거 가능</p></a></div>', 37.53498748317771, 126.9866737064594],

            //창덕궁 마커
            ['<a target="_blank" href="https://cdg.go.kr/">창덕궁 홈페이지</a>', 37.579711, 126.991043],

            //광화문
            ['<div class="info-window-content"><h2>Argon Dashboard</h2>' +
            '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>', 37.57074556176908, 126.97657787154162],

      

            //이름 :
            ['<div class="wrap"><div class="text-box"><h4>소월길공원</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.54360110955588, 126.98929699367623],

            //이름 :
            ['<div class="wrap"><div class="text-box"><h4>서빙고GS25앞</h4><div class="img-box"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.52051571635054, 126.99060992233376],

            //이름 :
            ['<div class="wrap"><div class="text-box"><h4>서빙고 한강공원</h4><div class="img-box"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.51773521194588, 126.9918544673078],

            //이름 :
            ['<div class="wrap"><div class="text-box"><h4>반포 한강공원</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.512452710874385, 126.99844309270914],


            ['<div class="wrap"><div class="text-box"><h4>잠원 한강공원</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.51880976079092, 127.00811971168314],


            ['<div class="wrap"><div class="text-box"><h4>암사 한강공원</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.55151354333961, 127.12172735659955],


            ['<div class="wrap"><div class="text-box"><h4>뚝섬유원지 한강</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.52902272478567, 127.0679973456779],


            ['<div class="wrap"><div class="text-box"><h4>뚝섬유원지 한강</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.5324770748609, 127.05946792100606],


            ['<div class="wrap"><div class="text-box"><h4>여의도 한강공원</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.532104188186885, 126.92649799316692],


            ['<div class="wrap"><div class="text-box"><h4>동작역 앞</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.50289221015125, 126.98048234099066],


            ['<div class="wrap"><div class="text-box"><h4>서울아트시네마 앞</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.57247471885372, 126.98792815329168],


            ['<div class="wrap"><div class="text-box"><h4>서울역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.552719973759224, 126.97216566198719],


            ['<div class="wrap"><div class="text-box"><h4>명일 명성교회 광장</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.548928439943424, 127.14833851400387],


            ['<div class="wrap"><div class="text-box"><h4>고덕역 3번출구앞</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.555180218054836, 127.15421255173246],


            ['<div class="wrap"><div class="text-box"><h4>강동역 천호대로</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.53478666362309, 127.13637170383828],


            ['<div class="wrap"><div class="text-box"><h4>암사역 지상</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.550333030395514, 127.12752041413847],


            ['<div class="wrap"><div class="text-box"><h4>고덕아르테온 상암로 3거리</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.55361202763929, 127.16820416038196],


            ['<div class="wrap"><div class="text-box"><h4>고덕아르테온 구천면로</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.55032452419766, 127.16863599603813],


            ['<div class="wrap"><div class="text-box"><h4>연세앞 연세로 삼거리</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.559788857555915, 126.93700705315383],


            ['<div class="wrap"><div class="text-box"><h4>여의도역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.52158081187274, 126.92454196766963],



            ['<div class="wrap"><div class="text-box"><h4>잠실 롯데월드타워 앞</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.51312377030232, 127.10094075402436],


            ['<div class="wrap"><div class="text-box"><h4>암사동 주홍빌딩앞</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거장</p></a></div>', 37.52949792779544, 127.99452749588642],


            ['<div class="wrap"><div class="text-box"><h4>신촌역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.555557530916474, 126.9369748666424],

            //이름 :
            ['<div class="wrap"><div class="text-box"><h4>---이름---</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.52949792779544, 127.99452749588642],

            //이태원 부군당 역사공원
            ['<div class="wrap"><div class="text-box"><h4>이태원 부군당 역사공원</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.53607441811143, 126.98975042885674],

            //용산구청.크라운호텔 정거장
            ['<div class="wrap"><div class="text-box"><h4>용산구청.크라운호텔 정거장</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>일반쓰레기통</p></a></div>', 37.53021789355991, 126.99118149959823],

            //광나루역 세븐일레븐앞
            ['<div class="wrap"><div class="text-box"><h4>광나루역 세븐일레븐</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.54504298637822, 127.10373075154716],

            //길동 카페베네앞
            ['<div class="wrap"><div class="text-box"><h4>길동역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.538218765313346, 127.1400799278815],

            //천호중 입구옆
            ['<div class="wrap"><div class="text-box"><h4>천호중학교 입구옆</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.545758066733256, 127.13913042590897],

            //목월공원 앞
            ['<div class="wrap"><div class="text-box"><h4>목월공원 앞</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>일반쓰레기통</p></a></div>', 37.53235786981386, 126.95478394082713],

            //한강진역 블루스퀘어
            ['<div class="wrap"><div class="text-box"><h4>한강진역 블루스퀘어</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.54077557967434, 127.00193057747167],

            //순천향대학병원
            ['<div class="wrap"><div class="text-box"><h4>순천향대학병원</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.535925826748134, 127.0053991941425],

            //한남오거리 하나은행
            ['<div class="wrap"><div class="text-box"><h4>한남오거리 하나은행</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.53332472605578, 127.00738292201822],

            //삼각지 보훈청 앞
            ['<div class="wrap"><div class="text-box"><h4>삼각지 보훈청 앞</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.535256999262835, 126.97394967772239],

            //국방부 옆 자전거대여소
            ['<div class="wrap"><div class="text-box"><h4>국방부 옆 자전거대여소</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.53455712410219, 126.97690734663283],

            //효창공원앞역 4번 출구
            ['<div class="wrap"><div class="text-box"><h4>효창공원앞역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>일반쓰레기통</p></a></div>', 37.5389764413256, 126.96214573245383],

            //용산전자상가
            ['<div class="wrap"><div class="text-box"><h4>용산전자상가</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>일반쓰레기통</p></a></div>', 37.532868695610254, 126.96376597482323],

            //전쟁기념관
            ['<div class="wrap"><div class="text-box"><h4>전쟁기념관</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.53473239150963, 126.97670228608774],

            //한강대로 크하운해태앞
            ['<div class="wrap"><div class="text-box"><h4>한강대로 크라운해태</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.54075507604247, 126.97323777445659],

            //강남 
            ['<div class="wrap"><div class="text-box"><h4>압구정로데오역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.527834559854334, 127.04091832890204],

             //강남 
            ['<div class="wrap"><div class="text-box"><h4>압구정역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.52747649438076, 127.02887666651114],

             //강남 
            ['<div class="wrap"><div class="text-box"><h4>신사중학교</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.52357682966236, 127.02124516690292],

             //강남 
            ['<div class="wrap"><div class="text-box"><h4></h4>압구정로데오역<div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.52885466528783, 127.03595404420176],

             //강남 
            ['<div class="wrap"><div class="text-box"><h4>압구정로데오역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.52655700175148, 127.04510207238546],

             //강남
            ['<div class="wrap"><div class="text-box"><h4>청담사거리</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.52468659559453, 127.0502804949567],

             //강남
            ['<div class="wrap"><div class="text-box"><h4>학동사거리</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.52332839945546, 127.03883035184968],



             //중구
            ['<div class="wrap"><div class="text-box"><h4>숭례문버스정류장</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.55939007935396, 126.9747024032933],

             //중구
            ['<div class="wrap"><div class="text-box"><h4>한국경제신문사</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.560338455442015, 126.96782099720922],

             //중구
            ['<div class="wrap"><div class="text-box"><h4>회현역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.558583226915424, 126.97811980832117],

             //중구
            ['<div class="wrap"><div class="text-box"><h4>염천교</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.55941815989246, 126.97019465302924],

             //중구
            ['<div class="wrap"><div class="text-box"><h4>뽕구돈까스</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.563437214929124, 127.0088048925355],

             //중구
            ['<div class="wrap"><div class="text-box"><h4>명동대성당</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.56315146614687, 126.98733893953731],

             //광진
            ['<div class="wrap"><div class="text-box"><h4>건대입구역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.54026399605505, 127.06919275950816],

             //광진
            ['<div class="wrap"><div class="text-box"><h4>동물원</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.54973187068922, 127.07944952680306],

             //강남
            ['<div class="wrap"><div class="text-box"><h4>역삼역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.50091029081231, 127.03675098708918],

             //강남
            ['<div class="wrap"><div class="text-box"><h4>세계무역센터 서쪽</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.51337638526087, 127.0565248058699],

             //강남
            ['<div class="wrap"><div class="text-box"><h4>코엑스앞</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.51169134016114, 127.06130986672584],

             //강남
            ['<div class="wrap"><div class="text-box"><h4>강남역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.49779911305143, 127.02789089224466],

             //강남
            ['<div class="wrap"><div class="text-box"><h4>방배역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.48153940660872, 126.9977053121037],

             //강남
            ['<div class="wrap"><div class="text-box"><h4>대법원앞</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.49176385487293, 127.00671753433303],

             //
            ['<div class="wrap"><div class="text-box"><h4>이름이름이름</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.52949792779544, 127.99452749588642],

             //
            ['<div class="wrap"><div class="text-box"><h4>이름이름이름</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거통</p></a></div>', 37.52949792779544, 127.99452749588642],


            //이태원. 이건 마지막 줄이야. 건드리면 안돼 !
            ['<div class="wrap"><div class="text-box"><h4>이태원역</h4><div class="img-box"><img src="http://img.bu.to"></div><a target="_blank" href="http://www.mhagreen.site"><p>분리수거 가능</p></a></div>', 37.53449403100533, 126.99439846817981]



        ]

        //마커 이미지
        var customicon = 'http://samuelgalaxys.github.io/reusemap/recycleicon.png'

       // var customicon = 'http://drive.google.com/uc?export=view&id=1tZgPtboj4mwBYT6cZlcY36kYaQDR2bRM'


        //인포윈도우
        var infowindow = new google.maps.InfoWindow();

        //마커 생성
        var marker, i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({

                //마커의 위치
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),

                //마커 아이콘
                icon: customicon,

                //마커를 표시할 지도
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {

                    //html로 표시될 인포 윈도우의 내용
                    infowindow.setContent(locations[i][0]);

                    //인포윈도우가 표시될 위치
                    infowindow.open(map, marker);
                }
            })(marker, i));

            if (marker) {
                marker.addListener('click', function () {

                    //중심 위치를 클릭된 마커의 위치로 변경
                    map.setCenter(this.getPosition());

                    //마커 클릭 시의 줌 변화
                    map.setZoom(14);
                });
            }
        }
    }


    function gps_click() {
      
     
        initMap();

        




      
             //GEOLOCATION.내위치 가져오기
    window.onload = getLocation; 
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError, geo_options);
        }else{
            console.log("지오 로케이션 없음")
        }
    };
   // getLocation
    var latitude, longitude;
    function locationSuccess(p){
        latitude = p.coords.latitude,
        longitude = p.coords.longitude;
        initialize();
    }
   // locationSuccess
    function locationError(error){
        var errorTypes = {
            0 : "에러",
            1 : "허용 안눌렀음",
            2 : "위치가 안잡힘",
            3 : "응답시간 지남"
        };
       var errorMsg = errorTypes[error.code];
    }
   // locationError
     var geo_options = {
       enableHighAccuracy: true,
       maximumAge        : 30000,
       timeout           : 27000
     };
   // geo_options
         
         var map;
     function initialize() {
         var myLatLng = new google.maps.LatLng(latitude, longitude);
         var mapOptions = {
             zoom: 16,
             center: myLatLng
         };
         var image = 'mylocation.png';
         map = new google.maps.Map(document.getElementById('map-default'), mapOptions);
         var beachMarker = new google.maps.Marker({
             position: myLatLng,
             map: map,
             icon: image
         });
    }
     
    
     
     
     
    }


