
 exports.getIndexPage = (req, res) => {
    res.status(200).render('index');
  };
  exports.getAboutPage = (req, res) => {

    res.status(200).render('about');
  };
  
  exports.getContactPage = (req, res) => {
    res.status(200).render('contact');
  };
  
  exports.getGalleryPage = (req, res) => {
    res.status(200).render('gallery');
  };


  exports.getTrainingsPage = (req, res) => {
    res.status(200).render('trainings');
  };
  exports.getRegisterPage = (req, res) => {
    res.status(200).render('register',{
      page_name: 'register',
    });
  };
  exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
      page_name: 'login',
    });
  };
  
  
  
