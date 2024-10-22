import { ShortenTextPipe } from "./shorten-text.pipe";


fdescribe('ShortenPipe',()=>{
  let pipe: ShortenTextPipe;

  beforeEach(()=>{
    pipe = new ShortenTextPipe();

  })
  it('Shorten pipe should return correct answer',  () => {
    const testEmail = "user1@example.com_user1@example.com_user1@example.com";
    const result = pipe.transform(testEmail);
    expect(result).toEqual("user1@example.com_user1@example.com_user1@example. ..."); 
  });
})

