console.log('Attempting to get the fb profile pic');

urls = ["https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/",
                    "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/",
                    "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn3/",
                    "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn4/",
                    "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/",
                    "https://scontent-a-lax.xx.fbcdn.net/hphotos-frc1/",
                    "https://scontent-a-lax.xx.fbcdn.net/hphotos-frc2/",
                    "https://scontent-a-lax.xx.fbcdn.net/hphotos-frc3/",
                    "https://scontent-a-lax.xx.fbcdn.net/hphotos-frc4/",
                    "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash1/",
                    "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash2/",
                    "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash3/",
                    "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash4/"
                    ];

function FixProfileSrc() {
        small_profile = $('img.profilePic.img').clone();
        small_profile_link = $(small_profile).attr('src');

        random_element = Math.floor((Math.random() * urls.length) + 1);
        random_start_url = urls[random_element];
        image_file_name = small_profile_link.substring(small_profile_link.lastIndexOf('/') + 1, small_profile_link.length);
        new_url = random_start_url + image_file_name;

        // Check if the new_url resolves to an actual URL
        UrlExists(new_url, function(status){
            if(status !== 200){
                FixProfileSrc();
            }
        });

        // Create an anchor element and add the new_urls as the src
        a_element = $("<a></a>").attr('class', 'profilePicThumb').attr('href', new_url);
        a_element.append(small_profile);

        div_root = $('div.profilePicThumb').parent();
        $('div.profilePicThumb').remove();
        div_root.append(a_element);

        console.log('Profile pic URL successfully replaced');
    }


function UrlExists(url, cb) {
    jQuery.ajax({
        url:      url,
        dataType: 'text',
        type:     'GET',
        complete:  function(xhr){
            if(typeof cb === 'function')
               cb.apply(this, [xhr.status]);
        }
    });
}

FixProfileSrc();
