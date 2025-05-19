import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';

interface TabItem {
    title: string;
    content: string;
    value: string;
    // Puedes añadir más propiedades específicas
    imageUrl?: string;
    customClass?: string;
}

interface CardContent {
    title: string;
    subtitle: string;
    imageUrl: string | string[];
    description: string;
    buttonText?: string;
    // Otras propiedades personalizadas
    fullSizeImageUrl?: string | string[];
    customStyles?: any;
}

interface CurrentImage {
    urls: string[];  // Ahora es un array
    alt: string;
    currentIndex: number;
}


interface EventItem {
    status: string;
    date: string;
    icon: string;
    color: string;
    // Contenido específico para cada evento
    year?: string;
    leftContent: CardContent;
    rightContent: {
        tabs: TabItem[];
        // Otras propiedades del accordion si son necesarias
        accordionStyle?: string;
    };
}

@Component({
  selector: 'app-visits',
  imports: [Timeline, CardModule, ButtonModule, AccordionModule, DialogModule],
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.css'
})
export class VisitsComponentPage {

    events: EventItem[];

    displayModal: boolean = false;
    currentImage: CurrentImage = { urls: [], alt: '', currentIndex: 0 };

    showImageDialog(imageUrls: string | string[], altText: string) {
        this.currentImage = {
            urls: Array.isArray(imageUrls) ? imageUrls : [imageUrls],
            alt: altText,
            currentIndex: 0
        };
        this.displayModal = true;
    }

    // Navegación entre imágenes
    nextImage() {
        this.currentImage.currentIndex = 
            (this.currentImage.currentIndex + 1) % this.currentImage.urls.length;
    }

    prevImage() {
        this.currentImage.currentIndex = 
            (this.currentImage.currentIndex - 1 + this.currentImage.urls.length) % this.currentImage.urls.length;
    }

    constructor() {
        this.events = [
            {
                status: 'Baikonour',
                date: 'July, 1992',
                icon: 'pi pi-circle',
                year: '1992',
                color: '#ad46ff',
                leftContent: {
                    title: 'Baikonour',
                    subtitle: 'July 1992',
                    imageUrl: 'assets/images/baikonour_boys1.jpg',
                    fullSizeImageUrl: [
                        'assets/images/baikonour_boys1.jpg',
                        'assets/images/protonkrh.jpg',
                        'assets/images/energia_pad_sm.jpg',
                        'assets/images/energia_pad_entrance_sm.jpg',
                        'assets/images/gagarin_pad_krh_sm.jpg',
                        'assets/images/gagarin_pad_flame_pit_sm.jpg',
                        'assets/images/soyuz_assembly_bldg_sm.jpg',
                        'assets/images/buran_in_bldg_sm.jpg',
                        'assets/images/energia_factory_sm.jpg',
                        'assets/images/buranrunway.jpg',
                        'assets/images/mission_control_sm.jpg',
                        'assets/images/energia_museum_sm.jpg',
                        'assets/images/gagarin_capsule_sm.jpg',
                        'assets/images/proton_factory_sm.jpg'

                    ],
                    description: 'This is a photo of our tour group in front of a sign (in Russian, of course) announcing "Baikonour". I am top left popping my head out from behind the fellow in the red and blue striped shirt with a hat. I have become life-long friends with a number of the fellows I met on this trip, the so called "Baikonour Boys". You will see reference to several of them on this site.',
                    // buttonText: 'View details',
                    customStyles: {
                        imageHeight: '250px'
                    }
                },
                rightContent: {
                    tabs: [
                        { 
                            title: 'About this image', 
                            content: 'In July, 1992 I toured space facilities in Russia and Khazakstan with a group of 24 people for about ten days. The Cold War had recently ended and just seven months earlier the Soviet Union had dissolved, so we saw Russia much as it would have been during the Communist era. While we did the usual tourist things like see Red Square and the Kremlin, for we "space cadets" the highlight of the trip was a three day visit to the Baikonour Cosmodrome, the once top secret Soviet spaceport on the steppes of central Asia in Khazakstan.', 
                            value: '0'
                        },
                        { 
                            title: 'The high point of our visit to Baikonour', 
                            content: 'The high point of our visit to Baikonour was watching the launch of three cosmonauts, two Russians and one French, in the Soyuz-TM15 spacecraft to the Mir space station.', 
                            value: '1' 
                        }
                    ],
                    accordionStyle: ''
                }
            },
            // Agrega más eventos con estructuras diferentes según necesites
            
            {
                status: 'The Kennedy Space Center',
                date: 'February 1993',
                year: '1993',
                icon: 'pi pi-circle',
                color: '#ad46ff',
                leftContent: {
                    title: 'The Kennedy Space Center',
                    subtitle: 'February 1993',
                    imageUrl: 'assets/images/pad_39bkrh.jpg',
                    fullSizeImageUrl: [
                        'assets/images/pad_39bkrh.jpg',
                        'assets/images/pad39_a_sm.jpg',
                        'assets/images/vab_krh_sm.jpg',
                        'assets/images/vab_shuttle_sm.jpg',
                        'assets/images/opf_krh_sm.jpg',
                        'assets/images/opf_discovery_sm.jpg',
                        'assets/images/oandc_inside_sm.jpg',
                        'assets/images/oandcdoor_sm.jpg'

                    ],
                    description: 'In late February/early March 1993 I spent eight days in Florida visiting and touring buildings at the John F. Kennedy Space Centre, staying with my friend, the late Ron Caswell.',
                    // buttonText: 'View details',
                    customStyles: {
                        imageHeight: '250px'
                    }
                },
                rightContent: {
                    tabs: [
                        { 
                            title: 'About this image', 
                            content: 'His is undoubtedly the most famous spaceport in the world and is named for the American President who set the landing and safe return of a man on the moon within the decade of the 1960s as a national goal in a speech to Congress on May 25th, 1961. In the photo at left I am standing in front of Pad 39B. This is one of two pads (see also thumbnail below of Pad 39A, also previously used for the Saturn V and Space Shuttle, but now leased to SpaceX) built back in the 1960s originally for the Saturn V moon rocket, which was refurbished to accommodate the Space Shuttle in the late 1970s, and most recently NASA Artemis Programs Space Launch System (SLS) for human space exploration beyond low Earth Orbit.', 
                            value: '0'
                        },
                        { 
                            title: 'The golden ticket', 
                            content: 'I was lucky enough to have a friend (the late Butch Head) able to pull strings with NASA officials to get a "Centre Directors Gold Pass (which is what I am holding up in the photo in front of Pad 39B), which allowed us access (when accompanied by Ron Caswell, then an engineer at KSC) inside many of the buildings at KSC.', 
                            value: '1' 
                        }
                    ],
                    accordionStyle: ''
                }
            },
            {
                status: 'Kourou',
                date: 'November 1993',
                year: '1993',
                icon: 'pi pi-circle',
                color: '#ad46ff',
                leftContent: {
                    title: 'Kourou',
                    subtitle: 'November 1993',
                    imageUrl: 'assets/images/french_guiana_grp.jpg',
                    fullSizeImageUrl: [
                        'assets/images/french_guiana_grp.jpg',
                        'assets/images/v61_official_photo_sm.jpg',
                        'assets/images/ariane_assbly_bldg_sm.jpg',

                    ],
                    description: 'In November of 1993 a group of six of us flew to the South American colony of French Guiana.',
                    // buttonText: 'View details',
                    customStyles: {
                        imageHeight: '250px'
                    }
                },
                rightContent: {
                    tabs: [
                        { 
                            title: 'About this image', 
                            content: 'In November of 1993 a group of six of us flew to the South American colony of French Guiana which is on the northeast coast of the continent in the Amazon basin, a country cut out of dense jungle, to see the launch of an Ariane rocket. We witnessed the successful launch of Ariane V-61 (an Ariane 44LP rocket) at night, which placed two satellites into orbit.', 
                            value: '0'
                        },
                        { 
                            title: 'European Space Agency', 
                            content: 'In the photo at left the six of us are underneath the sign at the entrance to the space centre (left to right: Ken Harman, the late Ron Caswell, Linda Thomas, Richard Tonkin, Bob McCullough, the late Butch Head). The logo for "ESA", the European Space Agency can be seen on the sign, as well as the logo for "CNES", the French space agency. Kourou was then the busiest commercial spaceport in the world, launching a large number of telecommunications, weather and imaging satellites.', 
                            value: '1' 
                        }
                    ],
                    accordionStyle: ''
                }
            },
            {
                status: 'Vandenberg Air Force Base',
                date: 'July 1996',
                year: '1996',
                icon: 'pi pi-circle',
                color: '#ad46ff',
                leftContent: {
                    title: 'Vandenberg Air Force Base',
                    subtitle: 'July 1996',
                    imageUrl: 'assets/images/vandenberg_afb.jpg',
                    fullSizeImageUrl: [
                        'assets/images/vandenberg_afb.jpg',
                        'assets/images/slc6_1sm.jpg',
                        'assets/images/slc6_2sm.jpg',
                        'assets/images/slc6_3sm.jpg',
                        'assets/images/atlas_pad_vandenberg_clipsm.jpg'

                    ],
                    description: 'In July 1996 I drove down the west coast from my home in Vancouver Canada to tour several space-related facilities in California. One of the highlights of that trip was a visit to Americas busiest spaceport, Vandenberg Air Force Base near Lompoc California.',
                    // buttonText: 'View details',
                    customStyles: {
                        imageHeight: '250px'
                    }
                },
                rightContent: {
                    tabs: [
                        { 
                            title: 'About this image', 
                            content: 'With open ocean if launched straight to the south, this is a military installation from which many spy satellites are placed into polar orbit. A polar orbit is best for overflying most of the Earths surface in a relatively short period of time (as the Earth rotates below at 90 degrees to the satellite track), which is important for reconnaissance missions. Once again, I am very glad I took this tour when I did because this facility had never, so far as I am aware, been available for public tours before this time (1996) and now, in this post-911 world, I expect it is closed to the general public once again.', 
                            value: '0'
                        },
                        { 
                            title: 'Role of Vandenberg', 
                            content: 'Vandenberg played a hugely important role in the development of spaceflight technology that is rarely recognized. It is the site from which the Corona program satelittes were launched, the first American spy satellites which flew under the cover of the US Airforces Discoverer scientific satellite program. The first successful return of anything from Earth orbit took place on the test flight Discoverer XIII launched on August 10th, 1960 - an American flag, which was subsequently presented to President Eisenhower.', 
                            value: '1' 
                        },
                        { 
                            title: 'Corona Program', 
                            content: 'Startng on the next mission, Discoverer XIV launched on August 18th 1960, the Corona program began to live up to its potential, returning hundreds of photos of the Soviet Union - more photos returned from that one mission than had all 24 U-2 missions over the USSR to that point combined. This one mission revealed 64 previously unknown Soviet airfields and 26 new surface-to-air missile (SAM) sites. Of course, none of this was known at the time and did not become public until the Corona Program was declassified by Executive Order of President Bill Clinton in February 1995.', 
                            value: '2' 
                        }
                    ],
                    accordionStyle: ''
                }
            },
            {
                status: 'The Kennedy Space Center',
                date: 'January 2006',
                year: '2006',
                icon: 'pi pi-circle',
                color: '#ad46ff',
                leftContent: {
                    title: 'The Kennedy Space Center',
                    subtitle: 'January 2006',
                    imageUrl: 'assets/images/baikonour_5.jpg',
                    fullSizeImageUrl: [
                        'assets/images/pad_39bkrh.jpg',
                        'assets/images/new_horizons_launch_1_sm.jpg',
                        'assets/images/new_horizons_launch_2_sm.jpg',
                        'assets/images/new_horizons_launch_3_sm.jpg',
                        'assets/images/newhorizonsmodel1_sm.jpg',
                        'assets/images/newhorizonsmodel2_sm.jpg',
                        'assets/images/newhorizonsmodel3_sm.jpg',
                        'assets/images/newhorizonsmodel4sm.jpg',
                        'assets/images/seattle.jpg',
                        'assets/images/space_needlesm.jpg'

                    ],
                    description: 'A number of the guys who first met on the trip to Russia in 1992, the so called "Baikonour Boys" arranged to meet at "the Cape" in January of 2006 for a reunion and to see the New Horizons spacecraft launched to Pluto.',
                    // buttonText: 'View details',
                    customStyles: {
                        imageHeight: '250px'
                    }
                },
                rightContent: {
                    tabs: [
                        { 
                            title: 'About this image', 
                            content: 'This was just five months after our dear friend and fellow "Baikonour Boy" Butch Head met an untimely death in an auto accident and Butch was truly there in spirit throughout our time together. In fact, the Atlas V 500 with the New Horizons spacecraft was supposed to be launched on January 17th but was scrubbed that day and the next and finally launched on January 19th. As Bob McCullough noted, it was Butchs way of keeping us together a bit longer.', 
                            value: '0'
                        },
                        { 
                            title: 'Ron Caswell Condo', 
                            content: 'We watched the launch from the deck of the late Ron Caswells condo, situated directly across the Indian River from the launch site. The photos and video of the launch below were taken from Rons deck.', 
                            value: '1' 
                        }
                    ],
                    accordionStyle: ''
                }
            },
            {
                status: 'Peenemunde',
                date: 'June 2009 & September 2015',
                year: '2009',
                icon: 'pi pi-circle',
                color: '#ad46ff',
                leftContent: {
                    title: 'Peenemunde',
                    subtitle: 'June 2009 & September 2015',
                    imageUrl: 'assets/images/peenemunde_v2.jpg',
                    fullSizeImageUrl: [
                        'assets/images/peenemunde_v2.jpg',
                        'assets/images/peenemunde_museum_entrancesm.jpg',
                        'assets/images/peenemunde_museum_mainsm.jpg',
                        'assets/images/peenemunde_v2_enginesm.jpg',
                        'assets/images/peenemunde_v2_fuel_injectorsm.jpg',
                        'assets/images/germany_group.jpg',
                        'assets/images/v2_monument_sm.jpg',
                        'assets/images/v2_monument_group.jpg'

                    ],
                    description: 'In June of 2009 and again in September of 2015 I was fortunate to visit Peenemunde on the Baltic coast in northeastern Germany which was the site of the development of the "A-4" rocket, better known as the "V-2", the first large ballistic missile which was developed during the Second World War by the team led by Dr. Wernher von Braun.',
                    // buttonText: 'View details',
                    customStyles: {
                        imageHeight: '250px'
                    }
                },
                rightContent: {
                    tabs: [
                        { 
                            title: 'About this image', 
                            content: 'Peenemunde is an isolated (as is appropriate for the development of weapons) fishing village, and it remains today small and distant from large centres, taking about half a day and 3 trains from Berlin to reach. When I first visited in 2009 few people spoke English in what was formerly East Germany - if there was a second language it was more likely to be Russian.', 
                            value: '0'
                        },
                        { 
                            title: 'Peenemunde Historisch-Technisches Informationszentrum', 
                            content: 'The town main attraction is the "Peenemunde Historisch-Technisches Informationszentrum" (i.e, "the museum"). It is housed in the only original building left standing from the 1936-43 period, the massive powerplant (coal into electricity). Much of the original power generation equipment is still there, if very rusty looking. The main, permanent exhibit is the best and most detailed description of what went on here I have seen anywhere (I guess youd expect that) and how it fits into the subsequent develoment of rocketry.', 
                            value: '1' 
                        },
                        { 
                            title: 'Has it benefitted mankind or not?', 
                            content: 'More than any space museum I have ever seen there is an ethical spin to this one - it repeatedly poses the question about the technology developed here - has it benefitted mankind or not? The museum also does not pull any punches about the darker side of those years - the slave labour employed both here and after the 1943 bombing in the manufacture of the A-4 (V-2) in Mittlewerk-Dora.', 
                            value: '2' 
                        }
                    ],
                    accordionStyle: ''
                }
            },
            {
                status: 'Woomera',
                date: 'September 2017',
                year: '2017',
                icon: 'pi pi-circle',
                color: '#ad46ff',
                leftContent: {
                    title: 'Woomera',
                    subtitle: 'September 2017',
                    imageUrl: 'assets/images/woomera_pad.jpg',
                    fullSizeImageUrl: [
                        'assets/images/woomera_pad.jpg',
                        'assets/images/woomera-groupsm.jpg'

                    ],
                    description: 'In September of 2017 I attended the International Astronautical Congress (IAC) meeting in Adelaide, South Australia, along with my friends Bob McCullough of Big Rapids Michigan and Richard Tonkin of Smiths Gully, Victoria, Australia',
                    // buttonText: 'View details',
                    customStyles: {
                        imageHeight: '250px'
                    }
                },
                rightContent: {
                    tabs: [
                        { 
                            title: 'About this image', 
                            content: 'In conjunction with the IAC an optional day trip took 30 of us into the Austarlian desert to the Woomera Test Range, still an active military installation and formerly the site for the launch of a number of satellites. Australia became only the fourth nation to launch a satellite from its own soil when Wresat was launched from Woomera on November 29th, 1967. Woomera was also the launch site for the Europa rocket, an early joint venture of a number of European nations along with Australia.', 
                            value: '0'
                        },
                        { 
                            title: 'Active military test range', 
                            content: 'It was about a one and one-half hour flight from the Adelaide airport in a propeller driven plane into desert in the Northern Region of South Australia to Woomera. While there is a small museum in the town and a community rocket garden, because the Woomera Test Range is still an active military test range we were cautioned upon arrival in no uncertain terms that photography in any form within the gated test range was strictly forbidden. Thus, unfortunately, I have no photos of the impressive sites we saw in Woomera. In particular, we saw the huge now abandoned Launch Area 6 pad from which the Europa rocket (see photo left) was launched. ', 
                            value: '1' 
                        }
                    ],
                    accordionStyle: ''
                }
            }

        ];
    }
}