<?php
Use PHPMailer\PHPMailer\PHPMailer;

class Pages extends Controller {
    public function __construct() {
        $this->dashboardModel = $this->model('Dashboard');
        $this->mail = new PHPMailer(true);
        $this->postModel = $this->model('Post');
    }
    public function template($pages, $active){
        $this->view('template/header');
        $this->view('template/navigation', ['page' => $active]);
        $this->view('page/'.$pages);
        $this->view('template/footer');
    }
    public function templateData($pages, $active, $data){
        $this->view('template/header');
        $this->view('template/navigation', ['page' => $active]);
        $this->view('page/'.$pages, $data);
        $this->view('template/footer');
    }
    public function templatePartner($pages, $active, $link){
        $this->view('template/header');
        $this->view('template/navigation', ['page' => $active]);
        $this->view('page/'.$pages);
        $this->view('template/sponsor', ['link' => $link]);
        $this->view('template/footer');
    }
    public function index() {
        $events = $this->postModel->getEvent();
        $news = $this->postModel->getNews();
        $data = [
            'news' => $news,
            'events' => $events
        ];
        $this->templateData('index', 'home', $data);
    }
    public function event($page) {
        $events = $this->postModel->getEvent();
        $data = [
            'events' => $events,
            'page' => $page
        ];
        $this->templateData('event', 'company', $data);
    }
    public function news($page) {
        $news = $this->postModel->getNews();
        $data = [
            'news' => $news,
            'page' => $page
        ];
        $this->templateData('news', 'company', $data);
    }
    public function about() {
        $this->template('about', 'company');
    }
    public function contact() {
        $this->template('contact', 'company');
    }
    public function career() {
        $career = $this->postModel->getCareer();
        $data = [
            'career' => $career
        ];
        $this->templateData('career', 'company', $data);
    }
    public function networking() {
        $this->template('networking', 'solution');
    }
    public function security() {
        $this->template('security', 'solution');
    }
    public function cloud() {
        $this->template('cloud', 'solution');
    }
    public function arctic() {
        $this->templatePartner('arctic', 'partner', 'https://arcticsecurity.com/');
    }
    public function apresia() {
        $this->templatePartner('apresia', 'partner', 'https://www.apresia.jp/en/');
    }
    public function barracuda() {
        $this->templatePartner('barracuda', 'partner', 'https://www.barracuda.com/');
    }
    public function bitdefender() {
        $this->templatePartner('bitdefender', 'partner', 'https://www.bitdefender.co.id/');
    }
    public function cleafy() {
        $this->templatePartner('cleafy', 'partner', 'https://www.cleafy.com/');
    }
    public function datablink() {
        $this->templatePartner('datablink', 'partner', 'https://www.datablink.com/');
    }
    // public function elyphsoft() {
    //     $this->templatePartner('elyphsoft', 'partner', '');
    // }
    public function elock() {
        $this->templatePartner('elock', 'partner', 'https://www.elock.com.my/');
    }
    public function forcepoint() {
        $this->templatePartner('forcepoint', 'partner', 'https://www.forcepoint.com/');
    }
    public function pulsesecure() {
        $this->templatePartner('pulsesecure', 'partner', 'https://www.pulsesecure.net/');
    }
    public function sonicwall() {
        $this->templatePartner('sonicwall', 'partner', 'https://www.sonicwall.com/en-us/home');
    }
    public function tenable() {
        $this->templatePartner('tenable', 'partner', 'https://www.tenable.com/');
    }
    public function bitglass() {
        $this->templatePartner('bitglass', 'partner', 'https://www.bitglass.com/');
    }
    public function dflabs() {
        $this->templatePartner('dflabs', 'partner', 'https://www.dflabs.com/');
    }
    public function legal() {
        $this->template('legal', 'home');
    }
    public function privacy() {
        $this->template('privacy', 'home');
    }
    public function missing() {
        $this->view('template/header');
        $this->view('page/404');
    }
    public function news_view($id, $page) {
        $news = $this->postModel->getNewsData($id);
        $data = [
            'news' => $news,
            'page' => $page,
        ];
        $this->templateData('news_view', 'company', $data);
    }
    public function event_view($id, $page) {
        $events = $this->postModel->getEventData($id);
        $images = $this->postModel->getEventImages($id);
        $data = [
            'event' => $events,
            'image' => $images,
            'page' => $page,
        ];
        $this->templateData('event_view', 'company', $data);
    }
    public function contact_mail() {
        $data = [
            'name' => $_POST['name'],
            'company' => $_POST['company'],
            'email' => $_POST['email'],
            'phone' => $_POST['phone'],
            'comment' => $_POST['comment'],
            'reCAPTCHA' => $_POST['g-recaptcha-response']
        ];
        if($this->reCAPTCHA($data['reCAPTCHA'])){
            $this->sendContact($data,"walfaridhermawan@hotmail.com");
        }
        redirect('Pages/contact');
    }
    public function career_mail() {

            // name of the directory where the files should be stored
        $targetfile = ROOT.'/public/attachment/'.$_FILES['file']['name'];

        if (move_uploaded_file($_FILES['file']['tmp_name'], $targetfile)) {
            // file uploaded succeeded
            if(strtolower(pathinfo($targetfile,PATHINFO_EXTENSION)) != "pdf") {
                redirect('Pages/career');
            } else {
                $data = [
                    'name' => $_POST['name'],
                    'email' => $_POST['email'],
                    'phone' => $_POST['phone'],
                    'comment' => $_POST['comment'],
                    'attachment' => $targetfile,
                ];
                $this->sendCareer($data,"inquiry@syswareindonesia.com");
                unlink($targetfile);
                redirect('Pages/career');
            }
        } else {
            redirect('Pages/career');
        }
    }

    public function reCAPTCHA($captcha){
        $secretKey = SECRETKEY;
        $ip = $_SERVER['REMOTE_ADDR'];
        // post request to server
        $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
        $response = file_get_contents($url);
        $responseKeys = json_decode($response,true);
        // should return JSON with success as true
        return $responseKeys["success"];
    }
    private $mail;

    public function sendContact($data, $dest){
        $body = "".$data['comment']."<br><p>Nomor telpon saya : ".$data['phone']."</p><p>Perusahaan saya : ".$data['company']."</p>";
        $this->mail->isSMTP();
        $this->mail->SMTPDebug = 0;
        $this->mail->SMTPAuth = true;
        $this->mail->Port 	= 587;
        //penerima//
        $this->mail->Host = 'smtp.gmail.com';
        $this->mail->Username = 'ptsyswareindonesia@gmail.com';
        $this->mail->Password = 'AdminSysware1!';
        $this->mail->From = $data['email'];
        $this->mail->FromName = $data['name']."(".$data['email'].")";
        $this->mail->AddReplyTo($data['email'], $data['name']);
        $this->mail->addAddress($dest,"Contact Sysware");
        $this->mail->Subject="Contact";
        $this->mail->MsgHTML($body);
        if (!$this->mail->send()) {
        } else {
        }
    }
    public function sendCareer($data, $dest){
        $body = "".$data['comment']."<br><p>Nomor telpon saya : ".$data['phone']."</p>";
        $this->mail->isSMTP();
        $this->mail->SMTPDebug = 0;
        $this->mail->SMTPAuth = true;
        $this->mail->Port 	= 587;
        //penerima//
        $this->mail->Host = 'smtp.gmail.com';
        $this->mail->Username = 'ptsyswareindonesia@gmail.com';
        $this->mail->Password = 'AdminSysware1!';
        $this->mail->From = $data['email'];
        $this->mail->FromName = $data['name']."(".$data['email'].")";
        $this->mail->AddReplyTo($data['email'], $data['name']);
        $this->mail->addAddress($dest,"Career Sysware");
        $this->mail->Subject="Career";
        $this->mail->MsgHTML($body);
        $this->mail->AddAttachment($data['attachment']);
        if (!$this->mail->send()) {
        } else {
        }
    }
}
