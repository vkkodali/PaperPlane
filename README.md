## What is PaperPlane?
PaperPlane is a bookmarklet that lives in your browser's toolbar. When you are on a PubMed abstract page ([like this one](http://www.ncbi.nlm.nih.gov/pubmed/26553804)), click the PaperPlane bookmarklet to go to the PDF directly. Simple!

## Why is it necessary? Why did you make it? 
As a part of my day job I read a lot of articles from PubMed and hopping through multiple pages in multiple different tabs to reach the nicely formatted PDF felt a bit cumbersome. Digging around, I discovered Pubget's PaperPlane but was disappointed to find out that it doesn't really work that well after all. I decided that I will put my (extremely) rudimentary coding skills to some use... and out came this!

## How do I use it? 
Create a new bookmark for your browser and copy/paste the code shown below into the Location/URL box.
```javascript
javascript:(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','http://rawgit.com/vkkodali/PaperPlane/master/PP_Script.js');document.body.appendChild(jsCode);}
```

## Some caveats
+ It only works on PubMed abstracts pages. If you use it elsewhere, it fails silently.
+ It only works for some journals. If there is a PubMedCentral article is available it will take you there. But not all PMC PDFs are nicely formatted so you may want to just go to the Journal's website after all.
+ When it cannot take you to the PDF or a PMC PDF is not available, it will return a friendly message.

## Can I help/complain?
+ Of course! (At least be civil, if not constructive, when complaining).
+ If you come across a journal that does not work, let me know. I will try to add it. So far, I have not been able to add anything from Elsevier group. 
+ If you know javascript better than I do, you are welcome to check out the few lines of code [here](PP_Script.js) and add your contributions. For example, see the previous point about adding Elsevier group journals. 
