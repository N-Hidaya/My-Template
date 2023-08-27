import React from 'react'
import Link from 'next/link'
import {TbPointFilled} from 'react-icons/tb'

function TOS() {
    return (
        <div className='flex flex-col h-full space-y-4 mx-auto px-4 py-6 items-center rounded-md md:w-10/12'>
            <h2 className='pt-4 mt-20 text-[#402D29]'>Terms of Service</h2>
              <p>Effective Date: 04/08/2023</p>
                <div className='items-center h-full justify-center'>
                    <h3 className='py-4 underline'>Introduction</h3>
                    <p>Welcome to  <span className='font-bold'>AI Daya (“Company”, “we”, “our”, “us”)!</span> As you have just clicked our Terms of Service, please pause, grab a cup of coffee and carefully read the following pages. It will take you approximately 20 minutes.</p>
                    <p>These Terms of Service (“Terms”, “Terms of Service”) govern your use of our web pages located at <Link href='https://www.ai-daya.com/' className='underline text-blue'>https://www.ai-daya.com/</Link> operated by <span className='font-bold text-white drop-shadow-lg'>AI Daya</span>.</p>
                    <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here <Link href='https://www.ai-daya.com/PriPol' className='underline text-blue'>https://www.ai-daya.com/PriPol</Link>.</p>
                    <p>Your agreement with us includes these Terms and our Privacy Policy <span className='font-bold'>(“Agreements”)</span>. You acknowledge that you have read and understood Agreements, and agree to be bound of them.</p>
                    <p>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by contacting us here: <Link href='https://www.ai-daya.com/#contact' className='underline'>Contact</Link> so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>
                    <p>Thank you for being responsible.</p>
                    <h3 className='py-4 underline'>Communications</h3>
                    <p>By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at.</p>
                    <h3 className='py-4 underline'>Purchases</h3>
                    <p>If you wish to purchase any product or service made available through Service <span className='font-bold'>(“Purchase”)</span>, you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
                    <p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>
                    <p>We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.</p>
                    <p>We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.</p>
                    <p>We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.</p>
                    <h3 className='py-4 underline'>Contests, Sweepstakes and Promotions</h3>
                    <p>Any contests, sweepstakes or other promotions (collectively, <span className='font-bold'>“Promotions”</span>) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.</p>
                    <h3 className='py-4 underline'>Refunds</h3>
                    <p>Except when required by law, paid license are non-refundable due to the nature of the software being non-returnable.</p>
                    <h3 className='py-4 underline'>Content</h3>
                    <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material <span className='font-bold'>(“Content”)</span>. You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.</p>
                    <p>By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>
                    <p>You retain any and all of your rights to any Content you submit, post or display on or through Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through Service. However, by posting Content using Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through Service. You agree that this license includes the right for us to make your Content available to other users of Service, who may also use your Content subject to these Terms.</p>
                    <p>AI Daya has the right but not the obligation to monitor and edit all Content provided by users.</p>
                    <p>In addition, Content found on or through this Service are the property of AI Daya or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>
                    <h3 className='py-4 underline'>Prohibited Uses</h3>
                    <p>You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>In any way that violates any applicable national or international law or regulation.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.</span></p>
                    <p>Additionally, you agree not to:</p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through Service.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>Use any device, software, or routine that interferes with the proper working of Service.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>Take any action that may damage or falsify Company rating.</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>Otherwise attempt to interfere with the proper working of Service.</span></p>
                    <h3 className='py-4 underline'>Analytics</h3>
                    <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
                    <p className='font-bold'>Google Analytics</p>
                    <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>
                    <p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page:</p>
                    <p> <Link href='https://policies.google.com/privacy?hl=en' className='underline text-blue'>https://policies.google.com/privacy?hl=en</Link></p>
                    <p>We also encourage you to review the Google's policy for safeguarding your data:</p>
                    <p> <Link href='https://support.google.com/analytics/answer/6004245' className='underline text-blue'>https://support.google.com/analytics/answer/6004245.</Link></p>
                    <h3 className='py-4 underline'>No Use By Minors</h3>
                    <p>Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using any of Company, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.</p>
                    <h3 className='py-4 underline'>Accounts</h3>
                    <p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.</p>
                    <p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
                    <p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.</p>
                    <p>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p>
                    <h3 className='py-4 underline'>Intellectual Property</h3>
                    <p>Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of AI Daya and its licensors. Service is protected by copyright, trademark, and other laws of the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AI Daya.</p>
                    <h3 className='py-4 underline'>Copyright Policy</h3>
                    <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights <span className='font-bold'>(“Infringement”)</span> of any person or entity.</p>
                    <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim here: <Link href='https://www.ai-daya.com/#contact' className='underline'>Contact</Link>, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”</p>
                    <p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.</p>
                    <h3 className='py-4 underline'>DMCA Notice and Procedure for Copyright Infringement Claims</h3>
                    <p>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest;</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>identification of the URL or other specific location on Service where the material that you claim is infringing is located;</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>your address, telephone number, and email address;</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</span></p>
                    <p>You can contact our Copyright Agent via <Link href='https://www.ai-daya.com/#contact' className='underline'>Contact</Link></p>
                    <h3 className='py-4 underline'>Error Reporting and Feedback</h3>
                    <p>You may provide us either directly at <Link href='https://www.ai-daya.com/#contact' className='underline'>Contact</Link> or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service <span className='font-bold'>(“Feedback”)</span>.</p>
                    <p>You acknowledge and agree that:</p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>(i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; </span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>(ii) Company may have development ideas similar to the Feedback; </span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>(iii) Feedback does not contain confidential information or proprietary information from you or any third party; </span></p>
                    <p className='flex flex-row'><TbPointFilled className='self-center' /> <span>(iv) Company is not under any obligation of confidentiality with respect to the Feedback. </span></p>
                    <p>In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.</p>
                    <p>The third party sites and tools mentioned above include the following:</p>
                    <p className='font-bold'>Sentry</p>
                    <p>Sentry is open-source error tracking solution provided by Functional Software Inc. More information is available here:</p>
                    <Link href='https://sentry.io/privacy/' className='underline'>https://sentry.io/privacy/</Link>
                    <h3 className='py-4 underline'>Links To Other Web Sites</h3>
                    <p>Our Service may contain links to third party web sites or services that are not owned or controlled by AI Daya.</p>
                    <p>AI Daya has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
                    <p>YOU ACKNOWLEDGE AND AGREE THAT AI Daya SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.</p>
                    <p>WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.</p>
                    <h3 className='py-4 underline'>Disclaimer Of Warranty</h3>
                    <p>THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>
                    <p>NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>
                    <p>COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.</p>
                    <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
                    <h3 className='py-4 underline'>Limitation Of Liability</h3>
                    <p>EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>
                    <h3 className='py-4 underline'>Termination</h3>
                    <p>We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.</p>
                    <p>If you wish to terminate your account, you may simply discontinue using Service.</p>
                    <p>All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
                    <h3 className='py-4 underline'>Governing Law</h3>
                    <p>These Terms shall be governed and construed in accordance with the laws of State of France without regard to its conflict of law provisions.</p>
                    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.</p>
                    <h3 className='py-4 underline'>Changes To Service</h3>
                    <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.</p>
                    <h3 className='py-4 underline'>Amendments To Terms</h3>
                    <p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.</p>
                    <p>Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p>
                    <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.</p>
                    <h3 className='py-4 underline'>Waiver And Severability</h3>
                    <p>No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.</p>
                    <p>If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.</p>
                    <h3 className='py-4 underline'>Acknowledgement</h3>
                    <p>BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.</p>
                    <h3 className='py-4 underline'>Contact Us</h3>
                    <p>Please send your feedback, comments, requests for technical support:</p>
                    <p><Link href='https://www.ai-daya.com/#contact' className='underline'>Contact</Link></p>




                </div>
        </div>
    )
}

export default TOS