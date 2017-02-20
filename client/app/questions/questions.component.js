import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './questions.routes';

export class QuestionsController {
  tabs = [{
      "tabId":"Courses",
      "tabName": "Courses",
      "questions":[{
        "question": "What course combinations to take for the first sem?",
        "answer": "Since the answer to this question varies as per the program, you would get the best answer by publishing on the various Facebook groups linked to USC. For starters, try AIS Facebook Page.",
        "author":"Last Updated: 2013-08-14 07:52:45. Compiled By: Pallav Rustogi."
      },
      {
        "question": "Will I get an internship if I do a particular \"famous\" course, or do a course under a \"famous\" professor?",
        "answer": "Doing a course which you aren't interested in, simply because you think it will fetch you a job is never a smart idea. All professors take course work very seriously, and they all expect a certain level of dedication from you. The interviewers are only interested in how much you have learnt from the course. As long as you display the passion you have for a certain area, you will excel in the interviews!",
        "author": "Last Updated: 2013-08-14 07:53:50. Compiled By: Pallav Rustogi."
      },
      {
        "question": "How do I register for courses?",
        "answer": "If you are in a computer science program, you need to get a d-clearance from the department, and then register for classes. However, make sure you complete your Passport Verification first. You can get this done on campus, after you book an appointment on OIS's Website. This may vary for other majors.",
        "author": "Last Updated: 2013-12-02 08:23:43. Compiled By: Pallav Rustogi, Saravanan Ganesh."
      },
      {
        "question": "What are the STU50, and the ADM40 holds?",
        "answer": "The STU50 hold will be removed once you arrive on campus and complete your passport verification. The ADM40 hold will be removed once you complete your degree verification. If you have just completed your Undergraduation, then you will have a year to complete degree verification. Else you need to complete within your first semester. Students use IERF or WES for this. You can check their websites for more information on the process, and the charges.",
        "author": "Last Updated: 2013-08-14 07:52:45. Compiled By: Pallav Rustogi."
      },
      {
        "question": "What is RCL, and when should I take it?",
        "answer": "RCL stands for Reduced Course Load. Since RCL can be only availed once, students generally reserve that for the 2nd / 3rd semester, when they are taking more intensive courses or are looking for an internship, or full time job.",
        "author": "Last Updated: 2013-08-14 07:52:45. Compiled By: Pallav Rustogi."
      },
      {
        "question": "How do I get my degree verified via WES or IERF? What documents are needed?",
        "answer": "Here's everything you need to know about degree verification from IERF: http://www.ierf.org/index.php/individuals/usc-applications-requirements/ The steps for IERF verification in brief: Fill the application form online IERF apply online Pay the fees and take print out of the cover letter Send by post the ORIGINAL, OFFICIAL semester gradesheets and degree of your undergraduate studies. Also be sure to include the cover page with your 10-digit USC ID number. When IERF office has received your records, an email notification and confirmation will be sent to you. Note: WES verification is currently not accepted by USC.",
        "author": "Last Updated: 2013-08-14 07:52:45. Compiled By: Shounak Kamalapurkar, Kalyanaraman Santhanam, Saravanan Ganesh ."
      }]
    },
    {
        "tabId":"Finance",
        "tabName": "Finance",
        "questions":[{
          "question": "How can I pay my fees?",
          "answer": "A fee statement gets generated every time you add/drop a course. This can be viewed by logging into MyUSC and scrolling down to 'Student Links' and clicking on 'USC e-pay'. This receipt can be given to a bank in case you have applied for a bank loan. You also have the option to enter your bank account details, so you can pay the fees online.",
          "author": "Last Updated: 2013-08-14 07:52:45. Compiled By: Pallav Rustogi."
        },
        {
          "question": "How much money(cash) should we bring with us?",
          "answer": "You will not need a large amount of 'cash' here, so get around 200$. You can get the remaining money as demand draft. It takes around a week to get into your account. Besides the fees, you will need around 1200$ initially for the rent+deposit+misc. expenses. We would recommend keeping another 1000$ extra, just in case of emergencies.",
          "author": "Last Updated: 2013-08-14 07:52:45. Compiled By: Pallav Rustogi."
        }
      ]
    },
    {
        "tabId":"Housing",
        "tabName": "Housing",
        "questions":[{
          "question": "Can AIS help me find permanent accommodation and/or roommates?",
          "answer": "AIS is a student run organization, and it is not possible for us to make judgement on the various accommodation options available to students. Nor is it within our capacity to link students who we think will have similar interests so that they maybe roommates. Such decisions are best left to your judgement. You may post any queries you have on the Facebook groups and seniors who have an idea about the area, or other people looking for accommodation will be able to help you out.",
          "author": "Last Updated: 2013-08-14 07:52:45. Compiled By: Pallav Rustogi."
        },
        {
          "question": "What is temporary accommodation?",
          "answer": "We offer temporary housing to all new students for a maximum of three (3) days. Students use these three days to finalize and move to their permanent housing. You need to register with us online at least seven days before you arrive. The link for registrations will be available two months before the date of orientation. Register and find more at www.aisusc.org/housing.",
          "author": "Last Updated: 2014-06-07 14:13:39. Compiled By: Pallav Rustogi, Kalyanaraman Santhanam, Saravanan Ganesh."
        },
        {
          "question": "We are a group of 'N' students coming to USC. Can you reserve an apartment for us?",
          "answer": "A gentle no! Apartment-search is a pretty tedious task, and is not possible for us to do it for everyone. If you know someone personally, you can ask them to book one for you. However, everyone eventually gets a place to stay, so don't worry.",
          "author":"Last Updated: 2013-11-25 21:12:51. Compiled By: Pallav Rustogi, Saravanan Ganesh."
        },
        {
          "question": "What if we cannot find temp-accommodation place, or its locked?",
          "answer": "Try to contact the person with whom you are supposed to stay. As you will not have cellphone or anything, your best bet is to just go with the other guy in shuttle with you, and then call up people from there.",
          "author": "Last Updated: 2013-08-14 08:26:37. Compiled By: Pallav Rustogi ."
        },
        {
          "question": "How do I look for an apartment?",
          "answer": "Ask everyone you know. Ask the people you are staying with. Look for 'Now Leasing' banners in front of the apartments. They usually have a number written, which you can call up.(Do not hesitate to call or leave a message).",
          "author": "Last Updated: 2013-08-14 08:31:03. Compiled By: Pallav Rustogi."
        },
        {
          "question": "What is the rent like?",
          "answer": "A studio (a room and a kitchen) costs around $1300 per month. A one-bedroom apartment costs around $1400 per month and two-bedroom costs around $1900 per month. These are approximate prices, it may be higher or lower depending upon the apartment and location. Typically, 3 people stay in a one-bedroom apartment and 5 in a two-bedroom apartment. So your rent will something between $375-$450 going all the way up to $600 if you choose to live comfortably.",
          "author": "Last Updated: 2013-11-25 21:14:23. Compiled By: Pallav Rustogi, Saravanan Ganesh."
        },
        {
          "question": "West of campus is considered unsafe. Should I take an apartment there?",
          "answer": "Some areas around USC are unsafe. However, if your apartment is gated and has security system installed, it will not be a problem. Typically, 'North' side of campus is considered to be safe. The key is not to walk alone at nights on the streets. USC has campus cruisers that pick you up from wherever you are and drop you wherever you wanna go (eg. Home to Library) at any time (there is no charge for this service).",
          "author": "Last Updated: 2013-08-14 08:33:38. Compiled By: Pallav Rustogi."
        }
      ]
    },
    {
        "tabId":"Jobs",
        "tabName": "Jobs",
        "questions":[{
            "question": "How do I apply for on campus jobs?",
            "answer": "Job postings are put up on the ConnectSC website. Once you are on campus, you can apply to cafe jobs, or to other departments by approaching them with your resume. Apart from that, if you are looking for something technical, you could also contact your department or check the opportunities available in any of the research labs linked with USC. Some common places to find on campus jobs: Read Here.",
            "author": "Last Updated: 2013-08-16 15:42:25. Compiled By: Pallav Rustogi."
        },
        {
            "question": "Can I get TA/RA opportunities?",
            "answer": "Depending on what your areas of interest are, you could get in touch with the professor handling that area via e-mail. She will be able to guide you regarding the teaching assistantships or research assistantships opportunities.",
            "author": "Last Updated: 2013-12-31 06:35:36. Compiled By: Pallav Rustogi, Saravanan Ganesh."
        },
        {
            "question": "On campus job - Do you really need them?",
            "answer": "Thanks to Gaurav Savadi for sharing his experience and knowledge on his blog, and explaining elaborately pros and cons of on campus job in detail. Link to Blog.",
            "author": "Last Updated: 2013-08-16 15:20:17. Compiled By: Pallav Rustogi."
        },
        {
            "question": "Ok so honestly. Does USC get depressingly expensive? Or does On campus job and internships really help?",
            "answer": "On campus jobs DO help to take out your living expenses. But in case you dont want to do an on campus job ( As primary motive is to study), it is totally fine. Yes, internships do in case you are taking an paid internship (Also depends on your salary). But, at the end when you land up in a job, you will definitely forget all the expenses you have made and appreciate yourself that you were a part of Trojan Family. So, no need to get depressed. Work hard at school and Fight On!!!!",
            "author": "Last Updated: 2013-11-04 05:34:18. Compiled By: Pallav Rustogi, Kalyanaraman Santhanam."
        },
        {
            "question": "Can one survive without the on campus jobs. Only CS ppl seem to be getting work related to their fileds, are there any other forums for Mech, EE and petroleum folks? ....or are we just confined to do odd jobs or none at all?",
            "answer": "There are students who do on-campus jobs for 20 hrs a week and there are some who do not take up on-campus jobs at all. So it really depends on how well you can balance your work and study life. But do not forget that you are here for studies. As for jobs related to your fields, you should go to your respective departments and enquire about present or future opportunities for jobs. Drop in a copy of your resume even if they are done hiring - many students leave during the semester and you could replace them.",
            "author": "Last Updated: 2013-09-09 06:32:59. Compiled By: Shounak Kamalapurkar."
        },
        {
            "question": "What are the job prospects after studying at USC?",
            "answer": "USC is one of the top schools in US and the world. USC is also a brand name. USC degree on your profile works like magic and you will get a call. Converting the call depends on individuals. USC also have a huge alumni network, which is definitely beneficial when comes to Job hunting.",
            "author": "Last Updated: 2013-08-29 20:02:04. Compiled By: Pallav Rustogi."
        },
        {
            "question": "What are some skills that might be helpful in finding a part-time job?",
            "answer": "1. Here are some of the software tools, knowledge of which should help you find on-campus jobs- Microsoft Office Suite (Word, Power Point, Excel), Microsoft Access, Microsoft Outlook, Final Cut Pro and Adobe Photoshop. Even if you are not familiar with some of these, look out for tutorials on the internet which will give you a fair idea of how to use them. 2. Almost all non-technical jobs require good communication skills. 3. A resume drafted specially for on-campus jobs is desirable. This resume is totally different from your professional resume. Here, most importantly, add your availability schedule for the current semester. For example - Monday- 7am to 12pm, 4pm-8pm Tuesday- 7am-12pm, 3pm-6pm… Many employers will observe this before looking at the rest of your resume ! Next, add the list of software tools which you’re familiar with. Put in some instances of your experience that will highlight your skills as a team player and team leader. You can also include co-curricular extracurricular activites during your undergraduate years. Remember not to make it too technical. You can also create two different resumes for technical and non-technical jobs.",
            "author": "Last Updated: 2013-09-08 21:50:43. Compiled By: Shounak Kamalapurkar."
        },
        {
            "question": "I am really looking forward to apply to USC for masters. Just want to know if there are good job opportunities there after master? Because some people have been filling my mind about no jobs in USA after masters.",
            "answer": "Opportunities are plenty. You just need right skills to score a job. If you have plenty of skills, then there are plenty of jobs. Need not worry.",
            "author": "Last Updated: 2014-02-03 23:22:33. Compiled By: Pallav Rustogi."
        }
      ]
    },
    {
        "tabId":"Lifestyle",
        "tabName": "Lifestyle",
        "questions":[{
          "question": "What are the average monthly expenses, excluding rent? Assuming you eat out 2 days a week or so, and are going to cook",
          "answer": "Average monthly expense depends entirely on you. According to my personal experience, I spend 250-300$ per month apart from rent.",
          "author": "Last Updated: 2013-08-16 05:46:11. Compiled By: Pallav Rustogi."
        },
        {
          "question": "Can I drive with International Drivers Licence in LA?",
          "answer": "From the California Department of Motor Vehicles Website: ' The State of California does not recognize an International Driving Permit (IDP) as a valid driver license. California does recognize a valid driver license that is issued by a foreign jurisdiction (country, state, territory) of which the license holder is a resident. The IDP is only a translation of information contained on a person’s foreign driver license and is not required to operate a motor vehicle in California. Citations issued to a person in California who has an IDP, but does not have a California driver license will be placed on the Department of Motor Vehicle database. The IDP is also called an International Driver License, International License, etc. ' ---- ' If you are a visitor in California over 18 and have a valid driver license from your home state or country, you may drive in this state without getting a California driver license as long as your home state license remains valid. If you become a California resident, you must get a California driver license within 10 days. Residency is established by voting in a California election, paying resident tuition, filing for a homeowner’s property tax exemption, or any other privilege or benefit not ordinarily extended to nonresidents. '",
          "author": "Last Updated: 2013-08-24 01:23:34. Compiled By: Pallav Rustogi, Saravanan Ganesh."
        },
        {
          "question": "What are the rules to ride bicycle in LA?",
          "answer": "There are several rules to be observed while riding bicycle and sharing the road with vehicles. Rules: Download",
          "author": "Last Updated: 2013-08-16 07:05:48. Compiled By: Pallav Rustogi."
        },
        {
          "question": "When do seniors rag the juniors?",
          "answer": "Ragging is a crime. Nobody rags anybody. If any ragging incidents occur, please report to DPS immediately. We are all here for a professional degree and to earn respect. So, show professionalism and respect others. We do not entertain ragging in any form.",
          "author": "Last Updated: 2013-08-16 20:24:29. Compiled By: Pallav Rustogi."
        },
        {
          "question": "Where can I buy second hand furniture?",
          "answer": "You can buy second hand furniture at USC surplus store at: 3401 South Grand Avenue, University Parking Center, Los Angeles, CA 90089-7777. Also try Los Angeles Craigslist.",
          "author": "Last Updated: 2014-03-26 02:39:40. Compiled By: Pallav Rustogi, Saravanan Ganesh."
        },
        {
          "question": "Whats is the actual cost spent to study at USC? (Including housing, fee, living etc)",
          "answer": "Actual cost depends on several factors like fee per credit, number of 400 level credits taken, lifestyle, rent you are willing to pay etc. Living cost is typically 250-350$ a month apart from rent. So, you can roughly do calculations like this: Total cost = ((cost of living + rent) * 23) + (fee per credit * number of credits) + (Cost of medical insurance) + (Misc fee) - (On campus job salary) - (earnings from internship) + (To and fro flight tickets to home country and back) ",
          "author": "Last Updated: 2013-09-03 17:41:43. Compiled By: Pallav Rustogi."
        },
        {
          "question": "Which is the best vegetarian restaurant around USC?",
          "answer": "Although I have not seen a pure Vegetarian restaurant around USC, but there are couple of places where you get Vegetarian food:1) Manas 2) 23th street cafe 3) Chipotle 4) RTH cafe 5) Margarita Pizza Bar 6) California Pizza Kitchen 7) Panda Express 8) Pizza Studio 9) Dominos 10) Pizza Hut 11) Papa Jones 12) Mayura 13) Taco Bell 14) Taste of India If I missed any, please let us know. ",
          "author": "Last Updated: 2013-11-04 05:31:12. Compiled By: Pallav Rustogi, Kalyanaraman Santhanam."
        },
        {
          "question": "I am planning to buy a bike. How do I keep it safe and secure? ",
          "answer": "To keep your bike secure, you can buy two U shaped Locks. Make sure to lock both front and back tires with the frame and some immovable object. Also register your bike at DPS office and place Decal on your bike. Don't leave your bike on campus at night. If you are planning to leave your bike, place it in a busy location like Leavey Library cycle stand. ",
          "author": "Last Updated: 2013-08-29 19:54:32. Compiled By: Pallav Rustogi."
        }]
    },
    {
        "tabId":"Travel",
        "tabName": "Travel",
        "questions":[{
          "question": "What is a good time to arrive at USC?",
          "answer": "You can arrive as much as one month before the official start date of college. Arriving early will help you to find an apartment quickly, and if you are lucky, get a on-campus job. Arriving 20 days before the start date is a reasonable time.",
          "author": "Last Updated: 2013-08-14 08:21:01. Compiled By: Pallav Rustogi."
        },
        {
          "question": "Can someone from AIS pick me from the airport when I land?",
          "answer": "AIS does not be provide pick up from LAX. Most students use PrimeTime Shuttle, or Super Shuttle. You could go through this link and see if it helps.",
          "author": "Last Updated: 2013-08-14 08:17:59. Compiled By: Pallav Rustogi."
        },
        {
          "question": "How do we reach USC from the airport?",
          "answer": "There are 2 ways, Taxi and Shuttle(shared mini-vans). Taxis are typically quite expensive (around 50$), so shuttle is the most economical way to come to USC from the airport. There are shuttle stops right outside the gate where you come out from the airport. There are 2 companies running them, Primetime and Super Shuttle, they both are good. They will charge around 15-20$ per person. Shuttles will drop you exactly at the address you tell them.",
          "author": "Last Updated: 2013-08-14 08:25:42. Compiled By: Pallav Rustogi."
        }
      ]
    },
    {
        "tabId":"Miscellaneous",
        "tabName": "Miscellaneous",
        "questions":[{
          "question": "What immunizations do I have to get done?",
          "answer": "It's best to ensure with your family doctor if you have completed all your pending immunization. For USC, it is mandatory that you get proof that you have received two doses of MMR. You need to complete a TB test once you arrive on campus at a Student Health Center. This must be done on campus, TB Test results from anywhere else are not accepted.",
          "author": "Last Updated: 2013-08-14 07:55:47. Compiled By: Pallav Rustogi."
        },
        {
          "question": "Is it mandatory to take the ISE Exam? How hard is it?",
          "answer": "The ISE exam is offered by the American Language Institute on campus. It is a way to ensure that students are able to follow the English used in class, and the language of the books and other material that the professors recommend. You are required to take it if your TOEFL scores do not meet the University's expectations. To find out if you need to take the test, check the ISE Webpage",
          "author": "Last Updated: 2013-08-14 07:58:39. Compiled By: Pallav Rustogi."
        },
        {
          "question": "What programs does AIS have for new Students?",
          "answer": "We organize Sunday Meets and an Orientation to acclimatize students with the culture in USA, and what is expected of students. More information on these events will be posted on our Facebook page. Be sure to join!",
          "author": "Last Updated: 2013-08-14 08:15:38. Compiled By: Pallav Rustogi."
        },
        {
          "question": "How do I become a member of AIS?",
          "answer": "We will be conducting an orientation, and a couple of membership drives at the beginning of the next semester where yo u can register with us. You can find details on our membership drives, and upcoming events on our Facebook page.",
          "author": "Last Updated: 2013-08-14 08:14:12. Compiled By: Pallav Rustogi."
        },
        {
          "question": "What do we do after coming to USC?",
          "answer": "After you arrive here, you have to: Register with USC Find housing Open Bank Account Apply for SSN (Social Security Number) Find on-campus job if you plan to Register for courses The Office of International Students (OIS) keeps registration workshops few times every week, so you just need to check a day and register yourself. You will need to take the necessary documents for verification. Details can be found on the OIS website. They will also provide information on how to apply for SSN.",
          "author": "Last Updated: 2013-08-14 08:28:57. Compiled By: Pallav Rustogi."
        },
        {
          "question": "I have registered for AIS but still not recived email in my usc email, is there any issue with the site?",
          "answer": "Please send an email from your USC email address to tech@aisusc.org with your card id in subject line and we can look into this issue.",
          "author": "Last Updated: 2013-08-15 22:01:43. Compiled By: Pallav Rustogi."
        },
        {
          "question": "Melody itni chocolaty kyun hai?",
          "answer": "This question exists purely for a historical purpose: it is the first spam question we ever received. We appreciate our friend who took pains to ask this question. Your question justifies all the extra effort we took to keep this section spam clean. So, there you go. Our first and only spam question!",
          "author": "Last Updated: 2013-08-18 05:52:16. Compiled By: Saravanan Ganesh."
        },
        {
          "question": "When is the next event of AIS and how will we be notified?",
          "answer": "Friend us on Facebook and will invite you for all our events. AIS USC @ Facebook",
          "author": "Last Updated: 2013-11-04 05:29:58. Compiled By: Shiven Gandhi, Kalyanaraman Santhanam."
        }]
    },
    {
        "tabId":"Specific",
        "tabName": "Specific",
        "questions":[{
          "question": "",
          "answer": "No questions in this category yet.",
          "author":""
        },
      ]
    },
    {
        "tabId":"Documents",
        "tabName": "Documents",
        "questions":[{
          "question": "Helpsheet for New International Students",
          "answer": "Neil Vincent wrote and designed a beautiful document with all the information a new student would need in her first few days at USC. Trojan Helpsheet",
          "author":"Last Updated: 2014-06-07 16:13:36. Compiled By: Pallav Rustogi, Saravanan Ganesh."
        },
        {
          "question": "Checklist - Things to bring from India",
          "answer": "A printable checklist of things to bring from India. CheckList",
          "author":"Last Updated: 2014-06-07 16:13:14. Compiled By: Pallav Rustogi, Saravanan Ganesh."
        }]
    }];
}

export default angular.module('aisApp.questions', [uiRouter])
  .config(routing)
  .component('questions', {
    template: require('./questions.html'),
    controller: QuestionsController
  })
  .name;
