import React from "react";
import Header from "../components/Header";
import pic from "../assets/image/pic1.jpg";

const Main = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
        <img src={pic} alt="picture" width="100%" height="auto" />
        {/*
        text below */}
        <div style={{ padding: "30px" }}>
          <h4>
            <b>
              Ultimate Guide to CDA Structured Interview: Tips & Proven
              Strategies to Help You Prepare & Ace Your CDA Interview
            </b>
          </h4>

          <h4>
            <b>Overview:</b>
          </h4>

          <div>The purpose of the dental school interview</div>
          <div>History and rationale of the CDA interview</div>
          <div>Types of Questions</div>
          <a href="/contancts">Contact us</a>

          <h4>
            <b>What is the purpose of the dental school interview?</b>
          </h4>
          <p>
            Regardless of the format of dental school interview (e.g. CDA
            structured interview, MMI, or Panel interview), the purpose of the
            interview is rather straightforward and remains constant across the
            board: to assess the personality and Non-Cognitive Skills (NCSs) of
            the candidate.
          </p>
          <p>
            What are NCSs? By these we mean the following: Communication skills,
            interpersonal skills, ethical and moral decision making capacity,
            maturity, professionalism, sense of social responsibility, service
            to community, leadership, initiative, scholarship, ability to
            collaborate with others, conflict resolution skills, etc.
          </p>

          <p>
            Research has shown that, although academic performance (i.e. GPA and
            DAT scores) is a great indicator of didactic abilities in the first
            and second years of dental school, it provides, however, a very poor
            predictive value when it comes to future clinical performance. In
            fact, research shows that, an effective interview process is the
            best indicator of future clinical performance in the upper years, as
            it gives insight into the characteristics of the candidate and
            whether or not there will be a likelihood of future behavioural
            problems (an issue that dental schools constantly encounter and
            struggle to overcome). For example, it has been shown that those
            candidates who are "conscientious" and "open to new experiences"
            perform more effectively in the third and fourth years of dental
            school studies, where the education takes place in a clinical
            setting for the most part.
          </p>

          <p>
            Thus, dental schools, much like other professional schools, have
            over the past decade spent a lot of resources to devise the most
            effective interview process that will give them insight into the
            NCSs of their future candidates. And of course, for Canadian dental
            schools the answer has been the Canadian Dental Association's
            structured interview or CDA structured interviews.
          </p>

          <h4>
            <b>History, rationale, and the structure of the CDA interview</b>
          </h4>
          <p>
            Recall from our discussion above that we said an effective interview
            process is the most reliable way to select candidates who perform
            well clinically. Well in an attempt to test this theory, in 2004,
            Smithers et al. conducted a study, which produced results that were
            so shocking, that it unequivocally reinforced the Canadian Dental
            Association's earlier decision to commission a "new structured
            interview based on state-of-the-art contemporary interview
            techniques" (i.e. CDA structured interview)
          </p>
          <p>
            What were these shocking results you may ask? The evidence gathered
            by Smithers et al. (2004) simply reinforced earlier suspicions about
            the ineffectiveness of traditional interview processes. They showed
            that, "a typical [traditional] admissions interview was in fact
            worse than neutral in that it was negatively associated with
            students' performance in the first year of dental training, did not
            predict academic performance, and may have led to poor selection
            decisions." Thus, it should come as no surprise that the traditional
            panel interview has been replaced by most dental school with the CDA
            structured interview, which is a more reliable and valid future
            predictor of clinical performance.
          </p>
          <p>
            The CDA interview was not only re-structured in its format of
            delivery, but it was also restructured in terms of the type of
            questions that would be ask, and how they would be rated or scored
            by the interviewers. Let us first talk about the type of questions
            that you may encounter on your CDA structured interview.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
